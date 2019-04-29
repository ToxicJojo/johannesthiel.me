<template lang='pug'>
  Layout
    section.projects
      h1 Projects
      hr
      ul
        li(v-for="edge in $page.projects.edges" :key="edge.id")
          ProjectCard(:project='edge.node')
</template>

<page-query>
query Project {
  projects: allProject {
    edges {
      node {
        title 
        image
        color
        description
        path
      }
    }
  }
}
</page-query>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
export default {
  name: 'Projects',
  components: {
    ProjectCard,
  },
}
</script>


<style lang='scss' scoped>


section {
  max-width: 1024px;
  margin: auto;
}

h1 {
  text-align: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 30px 0px;

  li {
    display: flex;
    flex-basis: 50%;
  }
}

</style>
