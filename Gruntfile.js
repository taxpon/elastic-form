module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    uglify: {
      dist: {
          files: {
              'build/jquery.elastic-form.min.js': 'src/jquery.elastic-form.js'
          }
      }
    },
    watch: {
      files: ['src/*.js'],
      tasks: ['uglify']
    }

  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);
};