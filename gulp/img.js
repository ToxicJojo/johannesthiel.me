const  webp = require('imagemin-webp')
const imagemin = require('gulp-imagemin')
const  extReplace = require('gulp-ext-replace')
const { src, dest, watch} = require('gulp')

const webpConversion = () => {
  return src('./src/assets/img/**/*.png')
    .pipe(imagemin([
      webp({ quality: 50})
    ]))
    .pipe(extReplace('.webp'))
    .pipe(dest('./dist/assets/img'))
}

module.exports = {
  webpConversion,
}
