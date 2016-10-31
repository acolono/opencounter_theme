var gulp   = require('gulp');
var config = require('../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch-main', ['browsersync'], function() {
  //gulp.watch(config.css,     ['css']);
  gulp.watch('sass/main/**/*.scss',    ['sass-main']);
  //gulp.watch(['sass/**/*.scss'], ['styleguide']);
  //gulp.watch(config.sass,    ['sass', 'scsslint']);
  //gulp.watch(config.scripts, ['jshint']);
  //gulp.watch(config.scripts, ['scripts', 'jshint']);
});