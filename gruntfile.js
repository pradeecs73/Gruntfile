module.exports = function(grunt) {

  grunt.initConfig({

    env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: '../gruntcoverage/coverage/instrument/app/'
      }
    },

    instrument: {
      files: ['app.js','public/js/controller/*.js','public/js/model/*.js', 'routes/*.js'],
      options: {
        lazy: true,
        basePath: 'gruntcoverage/coverage/instrument/app/'
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['test/*.js']
    },

    storeCoverage: {
      options: {
        dir: 'gruntcoverage/coverage/reports'
      }
    },

    makeReport: {
      src: 'gruntcoverage/coverage/reports/**/*.json',
      options: {
        type: 'lcov',
        dir: 'gruntcoverage/coverage/reports',
        print: 'detail'
      }
    }           

  });


  grunt.registerTask('default',['env:coverage', 'instrument', 'mochaTest',
    'storeCoverage', 'makeReport']);

  grunt.loadNpmTasks('grunt-istanbul');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-env');


};



