module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
    imageoptim: {
      dynamic: {
        src: ['images']
      }
    },
    smushit: {
      dynamic: {
        src: ['images']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-smushit');

  grunt.registerTask('default', ['imagemin', 'imageoptim', 'smushit']);

};