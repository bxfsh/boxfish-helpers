import gulp from 'gulp';
import browserify from 'gulp-browserify';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import clean from 'gulp-clean';
import docs from './index.js';
import { exec } from 'child_process';
import livereload from 'gulp-livereload';
import mocha from 'gulp-mocha';

gulp.task('default', ['clean', 'babel', 'browserify', 'sass-docs']);
gulp.task('build', ['default', 'min']);
gulp.task('watch', () => {
  gulp.watch('helpers/*.js', ['default']);
  gulp.watch('docs/sass/*.scss', ['sass-docs']);
  gulp.watch('docs/index.hbs', ['docs']);
});

gulp.task('test', () => {
  return gulp.src('tests/helpers/*.js', { read: false })
    .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('docs', () => {
  return exec('node ./index.js');
});

gulp.task('sass-docs', () => {
  return gulp.src('docs/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('docs/css'));
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

// Browserify the main dist js file
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
