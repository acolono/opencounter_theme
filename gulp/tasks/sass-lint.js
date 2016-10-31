/*
var gulp     = require('gulp');
var scsslint = require('gulp-sass-lint');
var config   = require('../config').scsslint;

/**
 * Lint SCSS files
 */
/*
gulp.task('sasslint', function() {
  return gulp.src(config.src)
    .pipe(scsslint(config.options));
});*/

var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint');

gulp.task('sass-lint', function () {
  gulp.src('sass/main/partials/**/*.s+(a|c)ss')
      .pipe(sassLint())
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError())
});