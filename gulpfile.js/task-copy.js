// Task: copy
// Copy HTML and assets files into the dist folder.

const { paths } = require('./paths');
const { src, dest } = require('gulp');

function copyFiles() {
  return src([paths.imgPath, paths.htmlPath], { base: './src' })
    .pipe(dest('dist'))
}

exports.copyFiles = copyFiles;