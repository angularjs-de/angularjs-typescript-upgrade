// Karma configuration for unit tests

module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: './',

    // frameworks to use
    frameworks: ['systemjs', 'jasmine'],

    systemjs: {
      // Path to ths SystemJS configuration file
      configFile: './config.js',
      // modules to be loaded in the browser
      serveFiles: [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'app/**/*.ts'
      ],

      config: {
        packages: {
          // all files in app should be search as TypeScript files
          'app': { defaultExtension: 'ts' }
        }
      }
    },

    // // list of files / patterns to execute in the browser
    files: [
      'app/**/*.spec.ts'
    ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    preprocessors: {
      'app/components/**/*.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'ng'
    }
  })
}
