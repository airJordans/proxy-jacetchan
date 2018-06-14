module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['../booking-module/public/bundle-booking.js',
              '../listing-description-module/public/bundle-description.js',
              '../review-module/public/bundle-reviews.js',
              '../image-carousel-module/public/bundle-carousel.js'],
        dest: 'TEST/bundle.js'
      },
      css: {
        src: ['public/style.css'],
        dest: 'TEST/style.css'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/',
          src: ['*.css', '!*.min.css'],
          dest: 'TEST/',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'TEST/bundle.min.js': ['TEST/bundle.js']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
