var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('vendor', function() {
    return gulp.src([
        'bower_components/angular/angular.min.js'
    ])
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('styles', function() {
    return gulp.src('./app/stylesheets/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['vendor', 'styles']);