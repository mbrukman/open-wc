const path = require('path');
const indexHTML = require('../../../rollup-plugin-index-html');

module.exports = config => ({
  input: path.resolve(__dirname, './index.html'),
  output: {
    dir: '',
    format: 'esm',
  },
  plugins: [indexHTML(config)],
});
