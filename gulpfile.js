// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const del = require('del');

// Settings: Turn on/off build features
const settings = {
	imageTask: false,
};


// Remove pre-existing content from output folder
function cleanDist(done) {
  // Clean the dist folder
  del.sync([
    'dist'
  ]);

  // Signal completion
  return done();
};


// File paths
const files = {
  scssPath: 'src/scss/**/*.scss',
  jsPath: 'src/js/**/*.js',
  imgPath: 'src/images/**/*',
  htmlPath: 'src/**/*.html',
}

// Copy html and images into dist folder.
function copyTask() {
  return src([files.imgPath, files.htmlPath], { base: './src' })
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

// Sass task: compiles the style.scss file into style.css
function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()).on("error", sass.logError) // compile SCSS to CSS
    .pipe(postcss([autoprefixer()])) // PostCSS plugins
    .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
    .pipe(dest('./dist/css')) // put final CSS in dist folder
    .pipe(browserSync.stream());
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask() {
  return src([files.jsPath])
    .pipe(babel())
    .pipe(dest('./dist/js'))
    .pipe(browserSync.stream());
}

// Image task: adjust image size and output into the dist folder.
function imageTask(done) {
  if (!settings.imageTask) return done();

  return src([files.imgPath])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(dest('./dist/images'))
    .pipe(browserSync.stream());
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
  browserSync.init({
    server: {
      baseDir: "./dist/",
      index: "index.html"
    }
  });

  watch([files.scssPath, files.jsPath, files.imgPath, files.htmlPath],
    series(
      parallel(scssTask, jsTask, imageTask, copyTask),
    )
  );
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
exports.default = series(
  cleanDist,
  parallel(scssTask, jsTask, imageTask, copyTask),
  watchTask
);