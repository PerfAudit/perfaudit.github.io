module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['bower_components/rrssb/js/vendor/jquery.1.10.2.min.js', 'bower_components/rrssb/js/rrssb.min.js'],
        dest: 'js/share-buttons.js',
      },
    },
    copy: {
      main: {
        src: 'bower_components/rrssb/css/rrssb.css',
        dest: 'css/share-buttons.min.css'
      }
    },
    responsive_images: {
      dynamic: {
        files: [{
          expand: true,
          src: ['images/**.{jpg,gif,png}']
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },
    smushit: {
      dynamic: {
        src: ['images']
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-smushit');

  grunt.registerTask('default', ['responsive_images', 'imagemin', 'smushit']);
  grunt.registerTask('build:share-buttons', ['concat', 'copy']);

};