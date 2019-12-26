
const { src, dest, watch, series, parallel } = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


// Compile CSS from Sass.
function buildStyles() {
  return src('app/sass/*.sass')
    .pipe(sass({ outputStyle: 'expanded' }))   //expanded compressed
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
    .pipe(dest('app/css/'))
    .pipe(browsersync.reload({ stream: true }));
}

// Watch changes on all *.scss files, lint them and
// trigger buildStyles() at the end.
function watchFiles() {
  watch(
    ['app/sass/*.sass', 'app/*.html'],
    { events: 'all', ignoreInitial: false },
    series(buildStyles, reload)
  );
}
function reload(done){
    browsersync.reload();
    done();
}
// Init BrowserSync.
function browserSync(done) {
  browsersync.init({
    server: {
        baseDir: "./app"
      }, // Change this value to match your local URL.
    socket: {
      domain: 'localhost:3000'
    }
  });
  done();
}



// Export commands.
exports.default = parallel(browserSync, watchFiles); // $ gulp
exports.sass = buildStyles; // $ gulp sass
exports.watch = watchFiles; // $ gulp watch
exports.build = buildStyles; // $ gulp build