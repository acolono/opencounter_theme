/* sc5 styleguide task */
// Status: Needs some work. Updating styles and writing variables using designer tool.

var styleguide   = require('sc5-styleguide');
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
//var gulpFilter   = require('gulp-filter');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config');
var sc5Config   = config.sc5_styleguide;


gulp.task('styleguide:generate', ['styleguide:copyjs', 'styleguide:images'], function() {
  return gulp.src(['sass/{,**/}*.{scss,sass}','styleguide/{,**/}*.{scss,sass}'])
    .pipe(styleguide.generate(sc5Config.options))
    .pipe(gulp.dest(sc5Config.outputPath));
});

gulp.task('styleguide:export', ['styleguide:copyjs', 'styleguide:applystyles', 'styleguide:images'], function() {
  return gulp.src(['sass/{,**/}*.{scss,sass}','styleguide/{,**/}*.{scss,sass}'])
    .pipe(styleguide.generate(config.sc5_styleguide_export.options))
    .pipe(gulp.dest(config.sc5_styleguide_export.outputPath));
});

gulp.task('styleguide:applystyles', function() {
  var sassConfig = config.sass_options_dev;
  return gulp.src(['sass/{,**/}*.{scss,sass}','styleguide/{,**/}*.{scss,sass}'])
    // Initializes sourcemaps. Note: Does not work here correctly for now.
    //.pipe(sourcemaps.init())
    .pipe(sass(sassConfig).on('error', sass.logError))
    .pipe(postcss([ autoprefixer(config.autoprefixer) ]))
    // Writes sourcemaps.
    //.pipe(sourcemaps.write('maps'))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(sc5Config.outputPath))
});

gulp.task('styleguide:images', function() {
  return gulp.src(['images/**'])
    // Copy theme styleguide images to styleguide folder.
    //.pipe(gulp.dest('images'))
    .pipe(gulp.dest(sc5Config.outputPath + '/images'));
});

gulp.task('styleguide:copyjs', function () {
  return gulp.src('js/**/*.js')
    .pipe(gulp.dest(config.sc5_styleguide.outputPath  + '/js'));
 })

/*
gulp.task('styleguide:libraries', function() {
  return gulp.src(['libraries/normalize.css/**'])
    // Copy relevant libraries to the styleguide.
    //.pipe(gulp.dest('libraries/normalize.css'))
    .pipe(gulp.dest(sc5Config.outputPath + '/libraries/normalize.css'));
});
*/

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);