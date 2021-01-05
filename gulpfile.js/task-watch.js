// Watch task

// Import specific gulp API functions
const { watch, series, parallel } = require('gulp');

// Import paths
const { paths } = require('./paths');
const { settings } = require('./settings');

// Import tasks
const { cleanTask } = require('./task-clean');
const { copyTask } = require('./task-copy');
const { scssTask } = require('./task-sass');
const { jsTask } = require('./task-js');
const { imageTask } = require('./task-image');
const { reloadTask } = require('./task-browser');


function watchTask(done) {
  if (settings.watchTask === 'production') {
    console.log("-----------------------------------\nBuild Complete.\nAll files are ready for production.\n-----------------------------------");
    return done();
  };

  watch([paths.htmlPath, paths.scssPath, paths.jsPath, paths.imgPath],
    series(
      cleanTask,
      parallel(copyTask, scssTask, jsTask, imageTask),
      reloadTask
    )
  );
}

exports.watchTask = watchTask;