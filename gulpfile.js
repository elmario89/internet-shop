var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

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

gulp.task('sass', function () {
  gulp.src('src/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist'));
});

gulp.task('build', ['scripts', 'templates', 'sass']);

gulp.task('watch', function() {
  gulp.watch('src/javascript/**/*.js', ['scripts']);
  gulp.watch('src/**/*.html', ['templates']);
  gulp.watch('src/**/*.scss', ['sass']);
});


gulp.task('default', ['build', 'watch']);
