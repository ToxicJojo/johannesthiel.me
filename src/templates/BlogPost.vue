<template lang='pug'>
  Layout
    section.blog-post
      h1 {{ post.title }} 
      time {{ formattedDate }}
      div(v-html='post.content')
</template>


<page-query>

query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    content
    date
  }
}
</page-query>

<script>
import '@/assets/prism.css'

export default {
  name: 'BlogPost',
  computed: {
    post () {
      return this.$page.post
    },
        formattedDate () {
      return new Date(this.post.date).toLocaleDateString()
    },
  },
}
</script>

<style lang="scss">

section.blog-post {
  max-width: 1024px;
  margin: auto;
  padding: 30px;
}

section.blog-post {
  // This needs to be nested to be more specific than the normal styles of prism
  pre {
    position: relative;
    overflow: visible;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
      overflow: auto;
      margin: 30px -30px;
      padding: 30px;
    }

    &::before {
      content: ' ';
      display: block;
      position: absolute;
      width: 200vw;
      left: -50%;
      top: 0;
      bottom: 0;
      background-color: #2d2d2d;
      z-index: -1;
    }
  }
}

</style>
