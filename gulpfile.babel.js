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

// Clean out the /dist folder
gulp.task('clean', function () {
  return gulp.src('dist/**/*', { read: false })
    .pipe(clean());
});

// Compile the es6 files
gulp.task('babel', ['clean'], () => {

  gulp.src('helpers/*.js')
    .pipe(concat('helpers.js'))
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('js'));
});

// Browserify the main dist js file
gulp.task('browserify', ['babel'], () => {
  gulp.src('js/main.js')
		.pipe(browserify({
      sourceType: 'module',
      standalone: 'BoxfishHelpers',
    }))
    .pipe(rename('boxfish-helpers.js'))
		.pipe(gulp.dest('./dist'));
});

// Minify the dist file
gulp.task('minify', ['browserify'], () => {
  return gulp.src('dist/boxfish-helpers.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});


// The default task
gulp.task('default', ['clean', 'babel', 'browserify', 'minify']);

// Generate the docs
gulp.task('docs', () => {
  return docs();
});

// The watch task
gulp.task('watch', () => {
  gulp.watch('helpers/*.js', ['default']);
});

// The build task
gulp.task('build', ['clean', 'babel', 'browserify', 'minify', 'sass-docs', 'docs']);
