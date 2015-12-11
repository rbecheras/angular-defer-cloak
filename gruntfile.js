
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      jshint: {
        all: ['gruntfile.js', 'angular-defer-cloak.js'],
        options: {
          globals: {
            angular: true
          }
        }
      },
      uglify: {
        dist: {
          files: {
            'angular-defer-cloak.min.js': ['angular-defer-cloak.js']
          }
        }
      },
      cssmin: {
        target: {
          files: [{
            expand: true,
            src: ['angular-defer-cloak.css'],
            ext: '.min.css'
          }]
        }
      },
      bump: {
        options: {
          files: ['package.json','bower.json'],
          updateConfigs: [],
          commit: true,
          commitMessage: 'Release v%VERSION%',
          commitFiles: ['package.json','bower.json'],
          createTag: true,
          tagName: 'v%VERSION%',
          tagMessage: 'Version %VERSION%',
          push: true,
          pushTo: 'origin',
          gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
          globalReplace: false,
          prereleaseName: false,
          regExp: false
        }
      },
    });

    grunt.registerTask('default', ['jshint','uglify','cssmin']);
};
