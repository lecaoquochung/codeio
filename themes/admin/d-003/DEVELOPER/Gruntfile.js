/*!
 * SmartAdmin's Gruntfile for HTML / AJAX / PHP Versions (there is a different 
 * gulp file for the angluarJS & ReactJS versions, please see its related directory)
 * Copyright 2014-2016 MYORANGE INC.
 */

module.exports = function(grunt) {
  'use strict';
  
  // DEFINE DIRECTORY FOR SMARTADMIN VERSION HERE
  var globalConfig = {
    src: 'COMMON_ASSETS', 
    dest: 'AJAX_full_version' // PHP_AJAX_full_Version | PHP_HTML_full_version | HTML_full_version | AJAX_full_version |
  };
    
  // DEFINE     
  grunt.initConfig({
    globalConfig: globalConfig,
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * SmartAdmin v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',
    jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\') }\n\n',
    
  // JS TESTING    
    'jshint': {
      files: [
        'Gruntfile.js', 
        'Source_UNMINIFIED_JS/app.js',
        'Source_UNMINIFIED_JS/smartwidgets',
        'Source_UNMINIFIED_JS/speech'
      ],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    
    // MINIFY JS FILE
    'uglify': {
      options: {
        preserveComments: 'some',
        //banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        //  '<%= grunt.template.today("yyyy-mm-dd") %> */',
        beautify : {
          beautify: false,
          ascii_only: true,
          quote_keys: true
      }  
      },
    build: {
      
        // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [{
            expand: true,
            src: ['**/*.js', '!**/*.min.js', '!**/*.backup.js'],
            dest: '<%= globalConfig.dest %>/js/',
            cwd: 'Source_UNMINIFIED_JS/',
            extDot: 'last',
            ext: '.min.js'
            
        }]
      }
    },

  // SASS FILE COMPILATION
  'sass': {
    development: {
      options: {
        banner: '<%= banner %>'
      },
      files: {
        "Source_UNMINIFIED_CSS/bootstrap.css": "Source_SASS_FILES/scss/bootstrap.scss",
        "Source_UNMINIFIED_CSS/smartadmin-production.css": "Source_SASS_FILES/scss/smartadmin-production.scss",
        "Source_UNMINIFIED_CSS/font-awesome.css": "Source_SASS_FILES/scss/library/fontawesome/font-awesome.scss",
        "Source_UNMINIFIED_CSS/smartadmin-skins.css": "Source_SASS_FILES/scss/smartadmin-skin/smartadmin-skins.scss"
      }
    }
  },  
    
    // LESS FILE COMPILATION
  'less': {
    development: {
      options: {
        banner: '<%= banner %>'
      },
      files: {
        "Source_UNMINIFIED_CSS/bootstrap.css": "Source_LESS_FILES/bootstrap.less",
        "Source_UNMINIFIED_CSS/smartadmin-production.css": "Source_LESS_FILES/smartadmin-production.less",
        "Source_UNMINIFIED_CSS/smartadmin-production-plugins.css": "Source_LESS_FILES/smartadmin-production-plugins.less",
        "Source_UNMINIFIED_CSS/font-awesome.css": "Source_LESS_FILES/library/fontawesome/font-awesome.less",
        "Source_UNMINIFIED_CSS/smartadmin-skins.css": "Source_LESS_FILES/smartadmin-skin/smartadmin-skins.less"
      }
    }
  },
  
  // MINIFY CSS
  'cssmin': {
    minify: {
      expand: true,
      src: ['*.css', '!*.min.css'],
      dest: '<%= globalConfig.dest %>/css/',
      cwd: 'Source_UNMINIFIED_CSS/',
      extDot: 'last',
      ext: '.min.css'
    }
  },
  
    // WATCH FILES FOR CHANGES
    watch: {
      files: ['Source_LESS_FILES/smartadmin/top-menu.less','Source_UNMINIFIED_JS/app.js', 'Source_UNMINIFIED_JS/demo.js'],
      tasks: ['less','cssmin']
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');  

  grunt.registerTask('dist-test', ['jshint']);
  grunt.registerTask('default', ['uglify', 'less','cssmin']);
  grunt.registerTask('dist-less', ['less','cssmin']);
  grunt.registerTask('dist-sass', ['sass','cssmin']);
  grunt.registerTask('dist-js', ['uglify']);
  grunt.registerTask('dist-watch', ['watch']);


};