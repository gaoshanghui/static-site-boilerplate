// Clean task: Remove pre-existing content from dist folder

const del = require('del');

function cleanTask(done) {
  del.sync([
    'dist'
  ]);
  
  return done();
};

exports.cleanTask = cleanTask;