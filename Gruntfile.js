module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  require('node-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        precision: 8,
        sourceComments: true,
        sourceMap: true,
        outputStyle: 'expanded',
        includePaths: [
          // Include necessary node modules.
          'node_modules/susy/sass'
        ]
      },
      files: {
        expand: true,
        flatten: false,
        cwd: 'sass',
        src: ['*.{scss,sass}'],
        dest: 'css',
        ext: '.css',
        extDot: 'last'
      }
    }
  });

  grunt.registerTask('default', ['sass']);
};
