'use strict';

var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    less    = require('gulp-less'),
    inject  = require('gulp-inject');
 
gulp.task('connect', function() {
  connect.server({
    port: 3000,
    root: ['dist'],
    livereload: true
  });
});

gulp.task('font', function() {
  gulp.src('src/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));
});

gulp.task('html', function () {
  gulp.src('src/index.html')
      .pipe(inject(gulp.src(['src/partials/*.html']), {
          starttag: '<!-- inject:html -->',
          transform: function (filePath, file) {
              return file.contents.toString('utf8')
          }
      }))
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
  gulp.watch('src/styles/**/*.less', ['styles']);
  gulp.watch('src/**/*.html', ['html']);
});

gulp.task('default', ['font', 'styles', 'html', 'connect', 'watch']);