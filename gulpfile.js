var gulp = require('gulp')
var babel = require('gulp-babel')

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

gulp.task('default', ['build', 'copy-static'])
