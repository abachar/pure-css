var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    less    = require('gulp-less');
 
gulp.task('connect', function() {
  connect.server({
    port: 3000,
    root: ['dist'],
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload());
});

gulp.task('styles', function() {
  gulp.src('src/styles/main.less')
      .pipe(less())
      .pipe(gulp.dest('dist/styles'))
      .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('src/styles/*.less', ['styles']);
  gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['styles', 'html', 'connect', 'watch']);
