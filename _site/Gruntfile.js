module.exports = function(grunt) {
 
grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

sass: {
  dist: {
    options: {
      style: 'compressed'
    },
    files: {
      'css/style.css': 'scss/style.scss'
    }
  }
},

watch: {
  options: {
    livereload: true,
  },
  css: {
    files: ['scss/*.scss'],
    tasks: ['sass'],
  },
}


});
 
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.registerTask('default',['sass', 'watch']);
};