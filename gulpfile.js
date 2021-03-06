const { series } = require('gulp')
const clean = require('./gulp/clean')
const { cssProd, cssDev, cssWatch } = require('./gulp/css')
const { jsProd, jsDev, jsWatch } = require('./gulp/js')
const { html, htmlWatch } = require('./gulp/html')
const { webpConversion } = require('./gulp/img')
const serve = require('./gulp/serve')

module.exports = {
  buildProd: series(clean, html, cssProd, jsProd, webpConversion),
  buildDev: series(clean, html, cssDev, jsDev, webpConversion),
  serve: series(htmlWatch, cssWatch, jsWatch, serve),
}
