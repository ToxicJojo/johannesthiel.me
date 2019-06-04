const { watch, dest } = require('gulp')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const rollup = require('rollup-stream')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')

const scriptsConfig = {
  entry: './src/assets/scripts/main.js',
  dest: './dist/js',
}

const jsProd = () => {
  return rollup({
    input: scriptsConfig.entry,
    format: 'es',
  })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(babel())
    .pipe(dest(scriptsConfig.dest)) 
}

const jsDev = () => {
  return rollup({
    input: scriptsConfig.entry,
    format: 'es',
    sourcemap: true,
  })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(dest(scriptsConfig.dest))
}

const jsWatch = (done) => {
  watch(scriptsConfig.entry, jsDev)
  done()
}

module.exports = {
  jsProd,
  jsDev,
  jsWatch,
}
