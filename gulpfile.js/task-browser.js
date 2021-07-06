// Browser task: create a server and reload browser.

const { settings } = require('./settings');
const browserSync = require('browser-sync').create();

function reloadTask(done) {
  browserSync.reload();
  return done();
}

function serverTask(done) {
  browserSync.init({
    server: {
      baseDir: "./dist/",
      index: "index.html"
    },
    notify: false
  });

  return done();
}

exports.reloadTask = reloadTask;
exports.serverTask = serverTask;
