let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let reload = browserSync.reload;

gulp.task('sass', function () {
    gulp.src('client/css/style.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('./client/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["client/css/*.css", "client/js/*.js", "client/index.html"], {
        server: {
            baseDir: "./client"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("client/css/*.scss", ['sass']);
    gulp.watch("*.html").on("change", reload);
});