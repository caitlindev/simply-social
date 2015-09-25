module.exports = {
  build_dir: 'build',
  compile_dir: 'bin',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],
    
    coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
    coffeeunit: [ 'src/**/*.spec.coffee' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  
  vendor_files: {
    js: [
      'vendor/jquery/jquery.js',
      'vendor/jquery-ui/ui/jquery-ui.js',
      'vendor/moment/min/moment.min.js',
      'vendor/angular/angular.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-select/dist/select.min.js',
      'vendor/angular-ui-utils/ui-utils.min.js',
      'vendor/angular-ui-calendar/src/calendar.js',
      'vendor/fullcalendar/fullcalendar.js',
      'vendor/fullcalendar/gcal.js',
      'vendor/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
      'vendor/jquery-scrollstop-master/jquery.scrollstop.min.js',
      'vendor/angular-google-maps/dist/angular-google-maps.min.js',
      'vendor/lodash/dist/lodash.min.js'

    ],
    css: [
      'vendor/angular-ui-select/dist/select.min.css',
      'vendor/fullcalendar/fullcalendar.css'
    ],
    assets: [
    ]
  },
};
