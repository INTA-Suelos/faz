var gulp = require('gulp')
var babel = require('gulp-babel')

var browserSync = require('browser-sync')

// Todo lo que genera el output en /dev
gulp.task('build-dev', ['build', 'copy-static'])

// Genera el proyecto para que sea navegable
gulp.task('build', () => {
  return gulp.src('src/js/**/*.jsx')
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
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
