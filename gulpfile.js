const { series } = require('gulp')
const clean = require('./gulp/clean')
const { cssProd, cssDev, cssWatch } = require('./gulp/css')
const { jsProd, jsDev, jsWatch } = require('./gulp/js')

module.exports = {
  buildProd: series(clean, cssProd, jsDev),
  buildDev: series(clean, cssDev, jsDev),
  serve: series(cssWatch, jsWatch),
}
