var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
// Elimina directorios
var del = require('del')
// Corre tareas en secuencia
// TODO Remover con gulp 4
var sequence = require('run-sequence')

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

// Arranca el entorno de desarrollo
gulp.task('default', () => {
  sequence('clean', 'build-dev', ['browser-sync', 'watch'])
})

// Genera el proyecto entero en /dev
gulp.task('build-dev', ['transpile-js', 'copy-static'])

// Genera los js minificados, con sourcemaps y demás
gulp.task('transpile-js', () => {
  var bundler = browserify({
    entries: 'src/js/faz.js',
    extensions: ['.jsx'],
    // Generar sourcemaps
    debug: true,
    transform: [
      babel.configure({ presets: ['es2015', 'react'] })
    ]
  })

  return bundler.bundle()
    // Emitir errores sin cortar el stream
    .on('error', (e) => {
      console.log(e.toString())
    })
    .pipe(source('faz.js'))
    .pipe(buffer())
    // Generar sourcemaps reutilizandolos
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
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
  gulp.watch('src/js/**/*.jsx', ['transpile-js'])
})
