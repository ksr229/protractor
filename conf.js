exports.config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNdeOpts: {
    print: function() { },
    showTiming: true,
    showColor: true,
    isVerbose: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 600000

  },

  directConnect: true,

  onPrepare: function(){
    var specReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(
      new specReporter({
        colors: {
          enabled: true
        },
        spec: {
          displayStackTrace: true,
          displayDuration: true
        }
      })
    );
  },
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['07_calc_project.js']
  };