// Task: clean
// Delete everything in the dist folder

const del = require('del');

function clean(done) {
  del.sync([
    'dist'
  ]);
  
  return done();
};

exports.clean = clean;
