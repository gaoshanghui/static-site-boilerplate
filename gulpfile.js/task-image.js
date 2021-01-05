// Image task: adjust image size and output to the dist directory.

const { paths } = require('./paths');
const { src, dest } = require('gulp'); 
const imagemin = require('gulp-imagemin');
const { settings } = require('./settings');

function imageTask(done) {
  // Do not adjust image size during development for better peformance.
  if (settings.imageTask === 'development') return done(); 

  return src([paths.imgPath])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true, optimizationLevel: 2}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(dest('./dist/images'))
}

exports.imageTask = imageTask;