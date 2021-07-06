// Task: build css
// Create the final style.css file and save it into the dist folder.

const { src, dest } = require('gulp');
const { paths } = require('./paths');

const gulpSass = require('gulp-sass')(require('sass'));
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpPostcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function buildCSS() {
  // postcss plugins
  const postcssPlugins = [autoprefixer(), cssnano()];

  return src(paths.scssPath)
    .pipe(gulpSourcemaps.init()) // initialize sourcemaps first
    .pipe(gulpSass()).on("error", gulpSass.logError) // compile SCSS to CSS
    .pipe(gulpPostcss(postcssPlugins)) // Add prefix and minify CSS
    .pipe(gulpSourcemaps.write('.')) // write sourcemaps file in current directory
    .pipe(dest('./dist/css')) // put final CSS in dist folder
}

exports.buildCSS = buildCSS;
