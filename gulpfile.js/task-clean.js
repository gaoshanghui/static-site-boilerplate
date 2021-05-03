// ------------
// Clean Task
// Remove pre-existing files and directories from the dist directory
// ------------
const del = require('del');


const clean = (done) => {
  del.sync(['dist/**/*']);
  return done();
};

exports.clean = clean;