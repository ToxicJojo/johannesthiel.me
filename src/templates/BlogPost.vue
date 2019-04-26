<template lang='pug'>
  Layout
    section
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

<style lang="scss" scoped>

section {
  max-width: 1024px;
  margin: auto;
  padding: 30px;
}

</style>
