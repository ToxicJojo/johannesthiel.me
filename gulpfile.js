const { series } = require('gulp')
const clean = require('./gulp/clean')


module.exports = {
  buildProd: series(clean),
  buildDev: series(clean),
}
