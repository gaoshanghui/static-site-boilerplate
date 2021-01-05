// Sass task: compiles the style.scss file into style.css

const { paths } = require('./paths');
const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


function scssTask() {
  return src(paths.scssPath)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()).on("error", sass.logError) // compile SCSS to CSS
    .pipe(postcss([autoprefixer()])) // PostCSS plugins
    .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
    .pipe(dest('./dist/css')) // put final CSS in dist folder
}

exports.scssTask = scssTask;