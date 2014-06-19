module.exports = function(grunt) {

  //load plugins
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  //define tasks
  grunt.registerTask('default', ['all']);
  grunt.registerTask('all', ['clean', 'browserify:libs', 'browserify:app']);
  grunt.registerTask('server', ['all', 'watch:fast']);

  grunt.initConfig({
    //Watch the main.js file for changes
    watch: {
      fast: {
        files: 'src/frontend/main.js',
        tasks: ['browserify:app'],
        options: {
          livereload: true,
          nospawn: true
        }
      }
    },

    //Clean up any previous build artifacts
    clean: {
      build: ['/frontend/lib/*']
    },

    //Bundle stuff
    browserify: {
      options: {
        transform: [ ['reactify', {}], ['uglifyify', { 'global': true }] ]
        //bundleOptions: { 'debug': true } //for source map
      },
      //put all the libs into one file
      libs: {
        options: {
          require: ['socket.io-client', 'react']
        },
        src: "src/frontend/dummy_libs.js",
        dest: 'frontend/lib/libs.js'
      },
      //Compile the main.js file
      app: {
        options: {
          external: [
            'socket.io-client',
            'react'
          ]
        },
        src: 'src/frontend/main.js',
        dest: 'frontend/lib/main.js'
      }
    }
  });
};
