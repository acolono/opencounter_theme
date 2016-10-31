var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync');
var reload       = browsersync.reload;
var sass         = require('gulp-sass');
//var gulpFilter   = require('gulp-filter');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config');


/**
 * Generate CSS from SCSS for our main sass files
 * Build sourcemaps
 */
gulp.task('sass-main', function() {
  var sassConfig = config.sass_options_dev;

  sassConfig.onError = browsersync.notify;

  // Don’t write sourcemaps of sourcemaps
  //var filter = gulpFilter(['*.css', '!*.map']);

  //browsersync.notify('Compiling Sass');

  return gulp.src(config.sass_main.src)
    // Initializes sourcemaps.
    .pipe(sourcemaps.init())
    .pipe(sass(sassConfig))
    .pipe(postcss([ autoprefixer(config.autoprefixer) ]))
    // Writes sourcemaps.
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.sass_main.dest))
    .pipe(reload({stream: true}));
});

/**
 * Generate CSS from SCSS for our panels layouts sass files
 * Build sourcemaps
 */
gulp.task('sass-panels', function() {
  var sassConfig = config.sass_options_dev;

  sassConfig.onError = browsersync.notify;

  // Don’t write sourcemaps of sourcemaps
  //var filter = gulpFilter(['*.css', '!*.map']);

  //browsersync.notify('Compiling Sass');

 return gulp.src(config.sass_panels.src)
    // Initializes sourcemaps.
    .pipe(sourcemaps.init())
    .pipe(sass(sassConfig))
    .pipe(postcss([ autoprefixer(config.autoprefixer) ]))
    // Writes sourcemaps.
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.sass_panels.dest))
    .pipe(reload({stream: true}));
});

/**
 * Generate CSS from all our scss files.
 * Build sourcemaps
 */
gulp.task('sass', function() {
  var sassConfig = config.sass_options_dev;

  sassConfig.onError = browsersync.notify;

  return gulp.src(config.sass_all.src)
    // Initializes sourcemaps.
    .pipe(sourcemaps.init())
    .pipe(sass(sassConfig)).on('error', sass.logError)
    .pipe(postcss([ autoprefixer(config.autoprefixer) ]))
    // Writes sourcemaps.
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.sass_all.dest))
    .pipe(reload({stream: true}));
});

/**
 * Generate CSS from SCSS for productive use.
 * Build sourcemaps
 */
gulp.task('sass-prod', function() {
  var sassConfig = config.sass_options_prod;

  return gulp.src(config.sass_all.src)
    .pipe(sass(sassConfig))
    .pipe(postcss([ autoprefixer(config.autoprefixer) ]))
    .pipe(gulp.dest(config.sass_all.dest));
});