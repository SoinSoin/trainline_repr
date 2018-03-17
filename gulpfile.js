var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('app/dist/css/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/dist/css'));
  });

  gulp.task('default',['sass'],function(){
gulp.watch('app/dist/css/scss/**/*.scss', ['sass']);
  });





