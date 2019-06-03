module.exports = (eleventyConfig) => {
  return {
    dir: {
      input: 'src',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
      output: 'dist',
    },
    htmlTemplateEngine: 'pug',
  }
}
