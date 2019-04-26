<template lang='pug'>
  Layout
    .blog
      h1 Blog Posts
      ul
        li(v-for="edge in $page.posts.edges" :key="edge.node.id") 
          PostRow(:post='edge.node')

</template>

<page-query>
query BlogPost {
  posts: allBlogPost {
    edges {
      node {
        title
        description
        date
        path
      }
    }
  }
}
</page-query>

<script>
import PostRow from '@/components/PostRow.vue'
export default {
  name: 'Blog',
  components: {
    PostRow,
  },
}
</script>

<style lang="scss" scoped>

.blog {
  max-width: 1024px;
  margin: auto;
  padding: 30px;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;
}

</style>
