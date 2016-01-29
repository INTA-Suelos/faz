var gulp = require('gulp')

// Para envolver el stream de browserify y adaptarlo a gulp
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')

var browserify = require('browserify')
var babel = require('babelify')

var browserSync = require('browser-sync')

// Todo lo que genera el output en /dev
gulp.task('build-dev', ['build', 'copy-static'])

// Genera el proyecto para que sea navegable
gulp.task('build', () => {
  var bundler = browserify({
    entries: 'src/js/faz.jsx',
    debug: true,
    extensions: ['.jsx'],
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
    .pipe(gulp.dest('dev'))
})

// Copia los estáticos
gulp.task('copy-static', () => {
  return gulp.src('src/**/*html')
    .pipe(gulp.dest('dev'))
})

// Levanta el servidor para los archivos compilados y vigila el directorio
gulp.task('browser-sync', ['build-dev'], () => {
  browserSync.init({
    server: { baseDir: './dev' },
    files: 'dev/**/*'
  })
})

gulp.task('default', ['browser-sync'])
