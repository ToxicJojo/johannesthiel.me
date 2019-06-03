const { src, dest, watch} = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')

const cssConfig = {
  src: './src/assets/styles/main.scss',
  dest: './dist/css',
  files: './src/assets/styles/**/*.scss',
}

const cssProd = () => {
  return src(cssConfig.src)
    .pipe(sass(cssConfig.sassConfigDev))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(dest(cssConfig.dest))
}

const cssDev = () => {
  return src(cssConfig.src)
    .pipe(sourcemaps.init())
    .pipe(sass(cssConfig.sassConfigDev))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(dest(cssConfig.dest))
}

const cssWatch = (done) => {
  watch(cssConfig.files, cssDev)
  done()
}

module.exports = {
  cssProd,
  cssDev,
  cssWatch,
}
