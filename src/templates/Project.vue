<template lang='pug'>
  Layout
    section.project
      h1 {{ project.title }} 
</template>


<page-query>

query Project ($path: String!) {
  project: project (path: $path) {
    title
  }
}
</page-query>

<script>
export default {
  name: 'Project',
  computed: {
    project () {
      return this.$page.project
    },
  },
}
</script>

<style lang="scss" scoped>


</style>
