var gulp = require('gulp-help')(require('gulp'));

var browserSync = require('browser-sync').create(),
    p = require('./package.json'),
    opn = require('opn');

gulp.task('serve', "Server sa LiveRelodom.", function () {
    browserSync.init({
        server: {
            baseDir: "./",
        },
        open: false
    });
    opn('http://localhost:3000/www/index.html');

    gulp.watch(["./www/**/*"]).
        on('change', browserSync.reload);
});