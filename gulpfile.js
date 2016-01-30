var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var del = require('del')
var sequence = require('run-sequence')

// Para envolver el stream de browserify y adaptarlo a gulp
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')

var browserify = require('browserify')
var babel = require('babelify')

var browserSync = require('browser-sync')

// Todo lo que genera el output en /dev
gulp.task('build-dev', ['transpile-js', 'copy-static'])

// Genera el proyecto para que sea navegable
gulp.task('transpile-js', () => {
  var bundler = browserify({
    entries: 'src/js/faz.jsx',
    extensions: ['.jsx'],
    // Generar sourcemaps
    debug: true,
    transform: [
      babel.configure({ presets: ['es2015', 'react'] })
    ]
  })

  return bundler.bundle()
    // Emite errores sin cortar el stream
    .on('error', (e) => {
      console.log(e.toString())
    })
    .pipe(source('faz.js'))
    .pipe(buffer())
    // Generar sourcemaps reutilizandolos
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dev'))
})

// Copia los estáticos
gulp.task('copy-static', () => {
  return gulp.src('src/**/*html')
    .pipe(gulp.dest('dev'))
})

gulp.task('clean', () => {
  return del('dev')
})

// Levanta el servidor para los archivos compilados y vigila el directorio
gulp.task('browser-sync', () => {
  browserSync.init({
    server: { baseDir: './dev' },
    files: 'dev/**/*'
  })
})

gulp.task('default', () => {
  sequence('clean', 'build-dev', 'browser-sync')
})
