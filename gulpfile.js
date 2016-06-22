var gulp = require('gulp'),
    webserver = require('gulp-webserver');


//Run Static server
gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
    }));
});

// Default task: Watch Files For Changes & Reload browser
gulp.task('default', ['serve']);