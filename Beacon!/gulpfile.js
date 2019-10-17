const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "app/"
    });
    gulp.watch("app/sass/*.sass", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});   

gulp.task('sass', function() {
    return gulp.src("app/sass/main.sass")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('concat-css', function () {
    return gulp.src('app/css/*.css')
      .pipe(concatCss("css/main.css"))
      .pipe(gulp.dest('dist/'));
});

gulp.task('minify-css', function () {
    return gulp.src('dist/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/css'));
  });

gulp.task('autoprefixer', function () {
    gulp.src('app/css/*.css')
    .pipe(autoprefixer({
        browsers: ['last 8 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('app/css'))
});

gulp.task('default', ['serve']);