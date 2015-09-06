'use strict';

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var cssimport = require('gulp-cssimport');
var htmlmin = require('gulp-htmlmin');
var processhtml = require('gulp-processhtml');
var del = require('del');
var build;

/**
 * Deletes the contents of the dist directory.
 * @param  {Function} done callback.
 * @return {undefined}     undefined.
 */
function clean(done) {
    return del('dist/**', done);
}

/**
 * Concatenates and minifies CSS.
 * @return {stream} File stream.
 */
function css() {
    return gulp.src(['src/css/main.css'])
        .pipe(cssimport())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
}

/**
 * Minifies and builds HTML.
 * @return {stream} File stream.
 */
function html() {
    return gulp.src(['src/index.html'])
        .pipe(processhtml())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
}

/**
 * Copies static files.
 * @return {stream} File stream.
 */
function copyStatic() {
    return gulp.src([
            'src/favicon.ico',
            'src/robots.txt',
            'src/apple-touch-icon.png'
        ])
        .pipe(gulp.dest('dist'));
}

/**
 * Copies font files.
 * @return {stream} File stream.
 */
function copyFont() {
    return gulp.src([
            'src/font/**/*'
        ])
        .pipe(gulp.dest('dist/font'));
}

build = gulp.series(
    clean,
    gulp.parallel(
        css,
        html,
        copyStatic,
        copyFont
    )
);

gulp.task('build', build);

module.exports = build;
