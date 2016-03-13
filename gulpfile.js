var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');
//
//
//gulp.task('sass', function () {
//    return sass('./sass/style.less')
//        .on('error', sass.logError)
//        .pipe(gulp.dest('./dist/style.css'));
//});

var less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less({

        }))
        .pipe(gulp.dest('./dist'));
});



gulp.task('watch',['less'],function(){
   gulp.watch(['./less/style.less'],['less']);
});