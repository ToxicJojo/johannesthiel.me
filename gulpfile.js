const { series } = require('gulp')
const clean = require('./gulp/clean')
const { cssProd, cssDev, cssWatch } = require('./gulp/css')

module.exports = {
  buildProd: series(clean, cssProd),
  buildDev: series(clean, cssDev),
  watch: series(cssWatch),
}
