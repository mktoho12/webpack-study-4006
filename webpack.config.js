const path = require('path');
module.exports = {
  context: path.join(__dirname, '/app'),
  entry: './entry',
  output: {
    path: path.join(__dirname, '/public/javascripts'),
    filename: 'bundle.js'
  }
};

