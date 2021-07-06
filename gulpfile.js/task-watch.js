// Import specific gulp API functions
const { watch, series, parallel } = require('gulp');

// Import paths
const { paths } = require('./paths');

// Import tasks
const taskClean = require('./task-clean');
const taskCopy = require('./task-copy');

const { buildCSS } = require('./task-buildcss');
const { buildJS } = require('./task-buildjs');

const { reloadTask } = require('./task-browser');

function watchTask() {
  watch(
    // Files that been watching
    [paths.htmlPath, paths.scssPath, paths.jsFiles, paths.imgPath],
    // Clean the dist folder first, then generate new files.
    series(
      taskClean.clean,
      parallel(buildCSS, buildJS),
      taskCopy.copyFiles,
      reloadTask
    )
  );
}

exports.watchTask = watchTask;