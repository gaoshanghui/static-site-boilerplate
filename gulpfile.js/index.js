// Gulp
const { task } = require('gulp');
const gulp = require('gulp')

// Tasks
const taskClean = require('./task-clean');
const taskBundleScripts = require('./task-bundle-scripts');

// const { copyTask } = require('./task-copy');
// const { serverTask } = require('./task-browser');
// const { scssTask } = require('./task-sass');

// const { imageTask } = require('./task-image');
// const { watchTask } = require('./task-watch');



// Export the default Gulp task so it can be run.
exports.default = gulp.series(
  taskClean.clean,
  taskBundleScripts.bundleScripts
  // gulp.parallel(copyTask),
  // serverTask,
  // watchTask
);