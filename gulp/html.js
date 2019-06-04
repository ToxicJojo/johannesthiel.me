const { watch } = require('gulp')
const { exec } = require('child_process')

const html = (done) => {
  exec('npm run eleventy', (err, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr)
    done()
  })
}

const htmlWatch = (done) => {
  watch('./src/**/*.{md,pug}', html)
  done()
}

module.exports = {
  html,
  htmlWatch,
}
