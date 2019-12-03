let gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    purgecss = require('gulp-purgecss'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify');
    
    

    
gulp.task('serve', ['sass'], function() {
    browserSync.init({server: "app/"});
    gulp.watch("app/sass/*.sass", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});   


gulp.task('sass', function() {
    return gulp.src("app/sass/main.sass")
        .pipe(sass({outputStyle: 'compressed'})) // outputStyle: nested expanded compact compressed
        .pipe(autoprefixer({overrideBrowserslist: ['last 8 versions'], cascade: false}))
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
    .pipe(autoprefixer({overrideBrowserslist: ['last 8 versions'], cascade: false}))
    .pipe(gulp.dest('app/css'))
});


gulp.task('purgecss', function() {
    return gulp
      .src('app/css/*.css')
      .pipe(purgecss({content: [('app/*.html'),('app/js/*js')]}))
      .pipe(gulp.dest('dist/css'))
  });

  gulp.task('uglify', function() {
    gulp.src('app/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
  });





gulp.task('default', ['serve']);
