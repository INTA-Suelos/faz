var gulp = require('gulp')
var gutil = require('gulp-util')
// Genera sourcemaps de los streams de gulp
var sourcemaps = require('gulp-sourcemaps')
// Permite que browserify inyecte variables de entorno en el build
var envify = require('gulp-envify')
var uglify = require('gulp-uglify')
// Elimina directorios
var del = require('del')
// Corre tareas en secuencia
// TODO Remover con gulp 4
var sequence = require('run-sequence')
var gulpif = require('gulp-if')

// Envuelven el stream de browserify y lo adaptan a gulp
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')

// Maneja las dependencias de módulos en el cliente
var browserify = require('browserify')
// Transpila a js
var babel = require('babelify')

// Server de desarrollo con live reload
var browserSync = require('browser-sync')
var historyFallback = require('connect-history-api-fallback')

// Por default arrancar a desarrollar (con el entorno definido afuera)
gulp.task('default', ['run'])

gulp.task('run', () => {
  gutil.log(`Arrancando en modo: ${process.env.NODE_ENV}`)
  sequence('clean', 'build', ['browser-sync', 'watch'])
})

// Sólo compila
gulp.task('dist', () => {
  gutil.log(`Compilando en modo: ${process.env.NODE_ENV}`)
  sequence('clean', 'build')
})

// Genera el proyecto entero en /dev
gulp.task('build', ['transpile-js', 'copy-static'])

// Genera js según NODE_ENV
gulp.task('transpile-js', () => {
  var bundler = browserify({
    entries: 'src/js/faz.js',
    extensions: ['.jsx', 'js'],
    // Generar sourcemaps si el entorno es desarrollo
    debug: process.env.NODE_ENV === 'development',
    transform: [
      babel.configure({
        presets: ['es2015', 'react'],
        // Permite usar { ...s, n } en vez de Object.assign({}, s, n)
        plugins: ['transform-object-rest-spread']
      })
    ]
  })

  return bundler.bundle()
    // Emitir errores sin cortar el stream
    // TODO Esto corta watch, pero las soluciones son muy complejas con gulp 3.
    .on('error', (e) => {
      gutil.log(e.toString())
    })
    .pipe(source('faz.js'))
    // Transforma el stream en buffer para gulp-sourcemaps
    .pipe(buffer())
    // Inyecta variables de entorno en el build
    .pipe(envify({ NODE_ENV: process.env.NODE_ENV }))
    // Genera sourcemaps reutilizandolos de browserify (debug: true) si el
    // entorno es desarrollo
    .pipe(gulpif(process.env.NODE_ENV === 'development',
      sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('maps')))
    // Sólo uglificar si el entorno es producción
    .pipe(gulpif(process.env.NODE_ENV === 'production', uglify()))
    .pipe(gulp.dest('dev'))
})

// Copia los estáticos
gulp.task('copy-static', () => {
  return gulp.src(['src/**/*.html', 'src/**/*.png'])
    .pipe(gulp.dest('dev'))
})

// Limpia el directorio de output
gulp.task('clean', () => {
  return del('dev')
})

// Levanta el servidor para los archivos compilados y vigila el directorio
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './dev',
      middleware: [ historyFallback() ]
    },
    port: 3002,
    browser: process.env.BROWSER_TO_SYNC,
    files: 'dev/**/*'
  })
})

// Vigila los cambios en src y reconstruye
gulp.task('watch', () => {
  gulp.watch(['src/**/*.html', 'src/**/*.png'], ['copy-static'])
  gulp.watch('src/js/**/*.js*', ['transpile-js'])
})
