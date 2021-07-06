// Import gulp API functions
const { series, parallel } = require('gulp');

// Import tasks
const taskClean = require('./task-clean');
const taskCopy = require('./task-copy');

const { buildCSS } = require('./task-buildcss');
const { buildJS } = require('./task-buildjs');

const { serverTask } = require('./task-browser');
const { watchTask } = require('./task-watch');

// Export the default Gulp task so it can be run.
exports.default = series(
  // clean the dist folder first, then generate new files.
  taskClean.clean,
  parallel(buildCSS, buildJS),
  taskCopy.copyFiles,
  serverTask,
  watchTask
);
