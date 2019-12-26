let gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    purgecss = require('gulp-purgecss'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify');
    
    

    
function serv()  {
    browserSync.init({server: "app/"});
    gulp.watch("app/sass/*.sass", gulp.series (sass));
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});   


function sass() {
    return gulp.src("app/sass/main.sass")
        .pipe(sass({outputStyle: 'expanded'})) // outputStyle: nested expanded compact compressed
        .pipe(autoprefixer({overrideBrowserslist: ['last 8 versions'], cascade: false}))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

function concat-css () {
    return gulp.src('app/css/*.css')
      .pipe(concatCss("css/main.css"))
      .pipe(gulp.dest('dist/'));
});


function autoprefixer () {
    gulp.src('app/css/*.css')
    .pipe(autoprefixer({overrideBrowserslist: ['last 8 versions'], cascade: false}))
    .pipe(gulp.dest('app/css'))
});


function purgecss () {
    return gulp
      .src('app/css/*.css')
      .pipe(purgecss({content: [('app/*.html'),('app/js/*js')]}))
      .pipe(gulp.dest('dist/css'))
  });

function uglify () {
    gulp.src('app/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
  });




  exports.js = js;
  exports.css = css;
  exports.html = html;
  exports.default = parallel(serv);
