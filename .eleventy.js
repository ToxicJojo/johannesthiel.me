module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/assets/img')

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
