module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      app: {
        src: "src/frontend/main.js",
        dest: "frontend/lib/bundle.js"
      }
    }
  });
  grunt.registerTask('default', ['uglify'])
};
