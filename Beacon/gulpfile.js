let gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    purgecss = require('gulp-purgecss'),
    browserSync = require('browser-sync').create();

    
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "app/"
    });
    gulp.watch("app/sass/*.sass", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});   


gulp.task('sass', function() {
    return gulp.src("app/sass/main.sass")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('concat-css', function () {
    return gulp.src('app/css/*.css')
      .pipe(concatCss("css/main.css"))
      .pipe(gulp.dest('dist/'));
});


gulp.task('autoprefixer', function () {
    gulp.src('app/css/*.css')
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 8 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('app/css'))
});


gulp.task('purgecss', function() {
    return gulp
      .src('dist/css/*.css')
      .pipe(
        purgecss({
          content: ['app/*.html']
        })
      )
      .pipe(gulp.dest('dist/css'))
  })



gulp.task('default', ['serve']);
