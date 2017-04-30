var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");
var jshint = require("gulp-jshint");

// Minify and concatanate css files
gulp.task('minify-css', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('public/css/'));
});

// Quality control for js files
gulp.task('jslint', function() {
    gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter()); // Display results
});


// Minify and concatanate js files
gulp.task('minify-js', function() {
    gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/js/'));
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['minify-css']);
    gulp.watch('src/js/**/*.js', ['jslint']);
    gulp.watch('src/js/**/*.js', ['minify-js']);
});


gulp.task('default', ['watch', 'minify-css', 'jslint', 'minify-js']);

gulp.task('deploy', ['minify-css', 'minify-js']);