import gulp from 'gulp';
import browserify from 'gulp-browserify';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import clean from 'gulp-clean';

// Default Task
gulp.task('default', ['clean', 'babel', 'browserify']);

// Watch Task
gulp.task('watch', () => {
  gulp.watch('helpers/*.js', ['default']);
});

// Clean out the /dist folder
gulp.task('clean', function () {
  return gulp.src('dist/**/*', { read: false })
    .pipe(clean());
});

// Compile the es6 files
gulp.task('babel', () => {
  gulp.src('helpers/*.js')
    .pipe(concat('helpers.js'))
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('js'));
});

// Basic usage
gulp.task('browserify', function () {
  gulp.src('js/main.js')
		.pipe(browserify({
      sourceType: 'module',
      standalone: 'BoxfishHelpers',
    }))
    .pipe(rename('bundle.js'))
		.pipe(gulp.dest('./dist'));
});

// Minify the dist file
gulp.task('min', () => {
  return gulp.src('js/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('dist'));
});
