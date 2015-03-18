module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
  //grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-smushit');

  grunt.registerTask('default', ['responsive_images', 'imagemin', 'smushit']);

};