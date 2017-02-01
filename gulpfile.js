// =========================================================
// gulpfile.js
// =========================================================
// ------------------------------------------------ requires
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    shell       = require('gulp-shell'),
    config      = require('./config/build.config.json'),
    bump        = require('gulp-bump'),
    clean       = require('gulp-clean'),
    concat      = require('gulp-concat'),
    browserSync = require('browser-sync'),
    cssmin      = require('gulp-cssmin'),
    filter      = require('gulp-filter'),
    git         = require('gulp-git'),
    gulpif      = require('gulp-if'),
    imagemin    = require('gulp-imagemin'),
    rename      = require('gulp-rename'),
    tagversion  = require('gulp-tag-version'),
    uglify      = require('gulp-uglify');

// Trigger
var production;


// ---------------------------------------------- Gulp Tasks
// Task: patternlab
// Description: Build static Pattern Lab files via PHP script
gulp.task('patternlab', function () {
    return gulp.src('./', {read: false})
        .pipe(shell([
            'php core/console --generate'
        ]))
    //.pipe(browserSync.reload({stream:true}));
});

// Task: styleguide
// Description: Copy Styleguide-Folder from core/ to public
gulp.task('styleguide', function() {
    return gulp.src(config.patternlab.styleguide.files)
        .pipe(gulp.dest(config.patternlab.styleguide.dest));
});

gulp.task('sass', function () {
    return gulp.src(config.paths.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.paths.sass.dest))
});
// task: BrowserSync
// Description: Run BrowserSync server with disabled ghost mode
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: config.root
        },
        ghostMode: true,
        open: "external"
    });
});

// ------------------------------------ Gulp Testing Message
gulp.task('message', function(){
    console.log('It works!!');
});

// ---------------------------------------------- Gulp Watch
gulp.task('watch:styles', function () {
    gulp.watch(config.paths.sass.src, gulp.series('sass'));
});

gulp.task('watch', gulp.series('sass',
    gulp.parallel('watch:styles')
));


// -------------------------------------------- Default task
gulp.task('default', gulp.series('sass',
    gulp.parallel('message', 'watch')
));

// // -------------------------------------------- Deploy Task
//
// // Task: Deploy static content
// // Description: Deploy static content using rsync shell command
// gulp.task('deploy', function () {
//     return gulp.src(config.deployment.local.path, {read: false})
//         .pipe(shell([
//             'rsync '+ config.deployment.rsync.options +' '+ config.deployment.local.path +'/ '+ config.deployment.remote.host
//         ]))
// });
// // -------------------------------------------- Release Task
//
// // Function: Releasing (Bump & Tagging)
// // Description: Bump npm versions, create Git tag and push to origin
// gulp.task('release', function () {
//     production = true;
//
//     return gulp.src(config.versioning.files)
//         .pipe(bump({
//             type: gulp.env.type || 'patch'
//         }))
//         .pipe(gulp.dest('./'))
//         .pipe(git.commit('Release a ' + gulp.env.type + '-update'))
//
//         // read only one file to get version number
//         .pipe(filter('package.json'))
//
//         // Tag it
//         .pipe(tagversion())
//
//         // Publish files and tags to endpoint
//         .pipe(shell([
//             'git push origin develop',
//             'git push origin --tags'
//         ]));
// });