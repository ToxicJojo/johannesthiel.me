const { watch, src } = require('gulp')
const browserSync = require('browser-sync')
const server = browserSync.create()

const serveConfig = {
  baseDir: './dist',
  cssSrc: './dist/css/**/*.css',
  htmlSrc: './dist/**/*.html',
}


const reload = (done) => {
  server.reload()
  done()
}

const injectCSS = () => {
  return src(serveConfig.cssSrc)
    .pipe(server.stream())
}

const serve = () => {
  server.init({
    server: {
      baseDir: serveConfig.baseDir, 
      serveStaticOptions: {
        extensions: ['.html'],
      },
    },
  })
  watch(serveConfig.htmlSrc, reload)
  watch(serveConfig.cssSrc, injectCSS)
}

module.exports = serve

