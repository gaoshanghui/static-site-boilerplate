// JS task: concatenates and uglifies JS files to script.js

const { src, dest } = require('gulp');
const { paths } = require('./paths');
const babel = require('gulp-babel');

function jsTask() {
  return src([paths.jsPath])
    .pipe(babel())
    .pipe(dest('./dist/js'))
}

exports.jsTask = jsTask;