// JS task: concatenates and uglifies JS files to script.js

const { dest } = require('gulp');
const { paths } = require('./paths');

const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');

// use vinyl-source-stream to turn our bundle into something 
// which gulp understands to be able to write it to a file.
const vinylSourceStream = require('vinyl-source-stream');
const vinylBuffer = require("vinyl-buffer");
const gulpUglify = require("gulp-uglify");
const gulpSourcemaps = require('gulp-sourcemaps');

function buildJS() {
  const browserifyOptions = {
    entries: [`${paths.jsFiles}/main.js`],
    debug: true,
    transform: [
      babelify.configure({
        presets: ["@babel/preset-env"],
        sourceMaps: true
      })
    ],
    plugin: watchify,
  };

  return (
    browserify(browserifyOptions)
    .bundle()
    .pipe(vinylSourceStream("bundle.js")) // Source the bundle
    .pipe(vinylBuffer()) // Turn it into a buffer
    .pipe(gulpSourcemaps.init( { loadMaps: true } ))
    .pipe(gulpUglify()) // And uglify
    .pipe(gulpSourcemaps.write('.'))
    .pipe(dest('./dist/js'))
  )
}

exports.buildJS = buildJS;
