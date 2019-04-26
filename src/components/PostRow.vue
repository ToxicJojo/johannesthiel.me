<template lang='pug'>
  .post-row
    h2 {{ post.title }}
    time(:datetime='formattedDate') {{ formattedDate }}
    p {{ post.description }}
    g-link(:to='post.path') Read more

</template>

<script>
export default {
  name: 'PostCard',
  props: ['post'],
  computed: {
    formattedDate () {
      return new Date(this.post.date).toLocaleDateString()
    },
  },
}
</script>

<style lang='scss' scoped>

.post-row {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
}

time {
  font-size: .75em;
}

a {
  margin-right: auto;
}

</style>
