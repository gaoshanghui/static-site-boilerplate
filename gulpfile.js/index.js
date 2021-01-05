// Import specific gulp API functions
const { series, parallel } = require('gulp');

// Import tasks
const { cleanTask } = require('./task-clean');
const { copyTask } = require('./task-copy');
const { scssTask } = require('./task-sass');
const { jsTask } = require('./task-js');
const { imageTask } = require('./task-image');
const { serverTask } = require('./task-browser');
const { watchTask } = require('./task-watch');


// Export the default Gulp task so it can be run.
exports.default = series(
  cleanTask,
  parallel(copyTask, scssTask, jsTask, imageTask),
  serverTask,
  watchTask
);