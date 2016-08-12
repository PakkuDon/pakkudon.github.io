var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

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

// Minify source files
gulp.task('bundle', function() {
    return gulp.src('app/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js'));
});

// Compile Sass stylesheets
gulp.task('sass', function() {
    return gulp.src('./app/stylesheets/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
});

// Recompile project files on change
gulp.task('watch', function() {
    gulp.watch('app/stylesheets/*.scss', ['sass']);
    gulp.watch('app/**/*.js', ['bundle']);
});

// Compile third-party stylesheets
gulp.task('styles', function() {
    return gulp.src([
        'bower_components/angular-carousel/dist/angular-carousel.css'
    ])
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('default', ['vendor', 'watch', 'styles']);
gulp.task('build', ['vendor', 'bundle', 'sass', 'styles']);