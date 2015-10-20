var gulp = require('gulp'),
    babelify = require('babelify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect');
gulp.task('babel', function () {
    return gulp.src(['src/*.js'])
        .pipe(sourcemaps.init())
        .pipe(browserify({
            transform:['babelify']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});
gulp.task('babel:watch', function () {
    gulp.watch('src/*.js', ['babel']);
});
gulp.task('connect', function() {
    connect.server({
        livereload: true,
        port: 8888
    });
});
gulp.task('default',['connect','babel','babel:watch']);