var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

// Minify library files
gulp.task('vendor', function() {
    return gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-carousel/dist/angular-carousel.js',
        'bower_components/angular-touch/angular-touch.min.js'
    ])
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/js'));
});

// Compile Sass stylesheets
gulp.task('sass', function() {
    return gulp.src('./app/stylesheets/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
});

// Compile third-party stylesheets
gulp.task('styles', function() {
    return gulp.src([
        'bower_components/angular-carousel/dist/angular-carousel.css'
    ])
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('default', ['vendor', 'sass', 'styles']);