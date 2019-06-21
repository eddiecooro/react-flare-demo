'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/react.production.min.js');
} else {
  module.exports = require('./umd/react.development.js');
}
