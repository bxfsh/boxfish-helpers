import gulp from 'gulp';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

gulp.task('default', ['babel']);

gulp.task('watch', () => {
  gulp.watch('helpers/*.js', ['default']);
});

gulp.task('babel', () => {
  gulp.src('helpers/*.js')
    .pipe(concat('helpers.js'))
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('js'));

  gulp.src(['js/main.js'])
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('min', () => {
  return gulp.src('js/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('dist'));
});
