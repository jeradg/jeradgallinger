module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ""
      },
      dist: {
        src: ['js/src/jquery.scrollTo.js',
              'js/src/jquery.localScroll.js',
              'js/src/retina.js',
              'js/src/responsiveslides.js',
              'js/src/functions.js'],
        dest: 'js/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/<%= pkg.name %>.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      scripts: {
        files: ['js/src/*.js'],
        tasks: ['concat', 'uglify']
      },
      options: {
        nospawn: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', [/*'sass', */'concat', 'uglify']);

};