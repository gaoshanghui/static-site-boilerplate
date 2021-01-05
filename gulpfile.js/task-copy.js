// Copy task: Copy html and images files into dist folder.

const { paths } = require('./paths');
const { src, dest } = require('gulp');

function copyTask() {
  return src([paths.imgPath, paths.htmlPath], { base: './src' })
    .pipe(dest('dist'))
}

exports.copyTask = copyTask;