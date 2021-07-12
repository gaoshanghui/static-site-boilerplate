// Import gulp API functions
const { series, parallel, src, dest, watch } = require('gulp');

// Packages for the clean task
const del = require('del');

// Packages for the build CSS task
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpSass = require('gulp-sass')(require('sass'));
const gulpPostcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Packages for the build JS task
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');

// Packages for the development server and the browser reload task
const browserSync = require('browser-sync').create();


// ==================================================
// Files Path
// Change the value to customize file structure
// Default output: build
// ==================================================

const path = {
  html: './src/**/*.html',
  script: './src/js',
  assets: './src/assets/**/*',
  scss: './src/scss/**/*.scss',
  output: 'build',
};

// ==================================================
// Define Tasks
// Each task is a function that returns a stream.
// ==================================================

// Task: Remove
// Remove all files in the build directory.
function removeFiles(done) {
  del.sync([path.output]);
  return done();
};

// Task: copy files
// Copy files into the build directory.
function copyFiles() {
  return src([path.assets, path.html], { base: './src' })
    .pipe(dest(path.output));
};

// Task: build CSS
// Build the CSS file and save it into the build directory.
function buildCSS() {
  // postcss plugins
  const postcssPlugins = [autoprefixer(), cssnano()];

  return src(path.scss)
    .pipe(gulpSourcemaps.init()) // initialize sourcemaps first
    .pipe(gulpSass()).on("error", gulpSass.logError) // compile SCSS to CSS
    .pipe(gulpPostcss(postcssPlugins)) // Add prefix and minify CSS
    .pipe(gulpSourcemaps.write('.')) // write sourcemaps file in current directory
    .pipe(dest(`${path.output}/css`)) // put final CSS in dist folder
};

// Task: build JavaScript
// build JS bundle with webpack-stream and save it into the build directory.
// For more detail about webpack-stream -> https://github.com/shama/webpack-stream
function buildJS() {
  return src(`${path.script}/main.js`)
    .pipe(
      // Setting webpack with configuration
      gulpWebpack(
        {
          mode: process.env.NODE_ENV,
          // Only generate source-map in the development environment.
          devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
          entry: {
            main: `${path.script}/main.js`,
            // another: './src/js/another.js', If you need multiple entry points.
          },
          output: {
            filename: '[name].bundle.js',
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
              },
            ]
          },
        },
        webpack
      )
    )
    .pipe(dest(`${path.output}/js`))
};

// Task: create a server
// Create a development server to serve files in the build directory
// For more detail about the browser-sync -> https://browsersync.io/docs/gulp
function staticServer(done) {
  browserSync.init({
    server: {
      baseDir: path.output,
      index: "index.html"
    },
    notify: false,
    ui: false,
    open: false,
  });

  return done();
};

// Task: reload the browser
// For more detail about the browser-sync -> https://browsersync.io/docs/gulp
function reloadBrowser(done) {
  browserSync.reload();
  return done();
};

// Task: watching files change
function watchingFiles() {
  watch(
    // Files that been watching
    [path.html, path.scss, path.assets, path.script],

    // Adjust the delay duration to avoid starting a task too early 
    // when many files are being changed at once - like find-and-replace.
    { delay: 500 },

    // Clean the build folder first, then generate new files.
    series(
      removeFiles,
      parallel(buildCSS, buildJS),
      copyFiles,
      reloadBrowser,
    )
  );
};


// ==================================================
// Export default task so Gulp can be run.
// development: Build JS bundle in development mode. 
//              Watch files change and reload browser.
// production: Build JS bundle in production mode. Ready for deploy.
// ==================================================
if (process.env.NODE_ENV === 'development') {
  exports.default = series(
    removeFiles,
    parallel(buildCSS, buildJS),
    copyFiles,
    staticServer,
    watchingFiles
  );
};

if (process.env.NODE_ENV === 'production') {
  exports.default = series(
    removeFiles,
    parallel(buildCSS, buildJS),
    copyFiles,
  );
};