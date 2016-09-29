var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp
    .src('src/javascript/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('templates', function() {
  return gulp
    .src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['scripts', 'templates']);

gulp.task('watch', function() {
  gulp.watch('src/javascript/**/*.js', ['scripts']);
  gulp.watch('src/**/*.html', ['templates']);
});


gulp.task('default', ['build', 'watch']);
