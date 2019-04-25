// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-pug',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/**/*.md',
        typeName: 'BlogPost',
        route: 'blog/:slug',
      },
    },
  ],
  css: {
    loaderOptions: {
      scss: {
        data: '@import "@/scss/_mixins.scss"; @import "@/scss/_variables.scss";',
      },
    },
  },
  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
      ],
    },
  },
}
