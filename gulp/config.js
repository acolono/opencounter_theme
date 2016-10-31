var css               = 'css/*.css';
var sass_panels       = 'sass/panels/*.{sass,scss}';
var sass_main         = 'sass/main/*.{sass,scss}';
var sass_fallback     = 'sass/fallback/*.{sass,scss}';
var sass_all          = 'sass/**/*.{sass,scss}';
var scripts           = 'js/*.js';
var images            = 'images/*';

module.exports = {
  browsersync: {
    development: {
      proxy: "d8.dev",
      notify: true,
      //logLevel: 'debug',
      reloadDelay: 2000
    }
  },
  watch: {
    drupal: [
      //'_config.yml',
      //src + '/*'
    ],
    css:     css,
    sass:    sass_main,
    scripts: scripts,
    images:  images
    //sprites: '/images/**/*.png',
    //svg:     'vectors/*.svg'
  },
  scsslint: {
    src: [
      sass_main,
      sass_panels
      //'!' + srcAssets + '/scss/base/_sprites.scss',
    ],
    options: {
      maxBuffer: 300 * 1024
    }
  },
  jshint: {
    src: '/js/*.js'
  },
  sc5_styleguide: {
    outputPath: 'sc5_styleguide',
    options: {
      title: 'OpenCounter Styleguide',
      port: '4000',
      server: true,
      sideNav: false, //put the navigation into the sidebar
      disableHtml5Mode: false,
      rootPath: 'sc5_styleguide',
      overviewPath: 'sass/styleguide.md',
      //styleVariables: '_colors.scss',
      styleVariables: false,
      customColors: 'sass/styleguide/_sc5_variables.scss',
      commonClass: 'body-styling',
      readOnly: true,
      extraHead: [
        '<link type="text/css" rel="stylesheet" href="/styleguide/sc5.css" media="all">',
        //'<script src="/js/custom-event-polyfill.js"></script>',
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>',
        '<script src="/js/styleguide_js_loader.js"></script>'
      ],
      disableEncapsulation: true
    }
  },
  sc5_styleguide_export: {
    outputPath: 'sc5_styleguide',
    options: {
      title: 'ao Styleguide',
      port: '4000',
      server: false,
      sideNav: true,
      disableHtml5Mode: false,
      rootPath: 'sc5_styleguide',
      overviewPath: 'sass/styleguide.md',
      //styleVariables: '_colors.scss',
      styleVariables: false,
      customColors: 'sass/styleguide/sc5_variables.scss',
      commonClass: 'body-styling',
      readOnly: true,
      extraHead: [
        '<link type="text/css" rel="stylesheet" href="/styleguide/sc5.css" media="all">',
        //'<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>',
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>',
        '<script src="/js/styleguide_js_loader.js"></script>'
      ],
      disableEncapsulation: true
    }
  },
  // Configuration for using gulp-ruby-sass
  sass_main: {
    src: sass_main,
    dest: 'css'
  },
  sass_panels: {
    src: sass_panels,
    dest: 'css'
  },
  sass_fallback: {
    src: sass_fallback,
    dest: 'css'
  },
  sass_all: {
    src: [
      sass_main,
      sass_panels,
      sass_fallback
    ],
    dest: 'css'
  },
  sass_options_dev: {
    includePaths: [ './node_modules' ],
    errLogToConsole: true,
    sourceComments: true,
    outputStyle: 'nested' //nested, expanded, compact, compressed
  },
  sass_options_prod: {
    includePaths: [ './node_modules' ],
    errLogToConsole: false,
    sourceComments: false,
    outputStyle: 'compressed' //nested, expanded, compact, compressed
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: false // Adds nice visual cascade for prefixes.
  }
};