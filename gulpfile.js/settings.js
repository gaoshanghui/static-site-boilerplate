// Settings: Turn on/off build features

let status = process.env.NODE_ENV; // value: "production" or "development"

let settings = {
  broswerTask: status,
  watchTask: status
};

exports.settings = settings;