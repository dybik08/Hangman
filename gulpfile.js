let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let reload = browserSync.reload;

gulp.task('sass', function () {
    gulp.src('css/style.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js", "index.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("css/*.scss", ['sass']);
    gulp.watch("*.html").on("change", reload);
});