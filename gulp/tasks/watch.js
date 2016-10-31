var gulp   = require('gulp');
var config = require('../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch('sass/**/*.scss',      ['sass']);
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  //gulp.watch(['sass/**/*.scss'], ['styleguide']);
  //gulp.watch(config.sass,    ['sass', 'scsslint']);
  //gulp.watch(config.scripts, ['jshint']);
});

/**
 * Start browsersync task and then watch styleguide files for changes
 */
gulp.task('watch-styleguide', ['styleguide'], function() {
  //gulp.watch('sass/**/*.scss',      ['sass-all']);
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  gulp.watch(['sass/**/*.scss'], ['styleguide']);
  gulp.watch(['js/**/*.js'], ['styleguide']);
  //gulp.watch(config.sass,    ['sass', 'scsslint']);
  //gulp.watch(config.scripts, ['jshint']);
});