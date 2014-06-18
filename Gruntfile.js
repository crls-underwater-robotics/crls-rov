module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        transform: [ ['reactify', {}], ['uglifyify', { 'global': true }] ]
        //bundleOptions: { 'debug': true } //for source map
      },
      app: {
        src: 'src/frontend/main.js',
        dest: 'frontend/lib/bundle.js'
      }
    }
  });
  grunt.registerTask('default', ['browserify']);
};
