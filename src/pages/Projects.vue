<template lang='pug'>
  Layout
    section.projects
      h1 Projects
      p A collection of projects I have worked on. Click on any one to get more information and a link to the website/github for that project. There is propably more stuff on my 
        a(href='https://github.com/ToxicJojo') Github
        | .
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
        content
        image
        color
        description
        path
        github
        website
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
  padding: 30px;
}

h1 {
  text-align: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 30px 0px;

  li {
    display: flex;
    flex-basis: 100%;
    flex-grow: 1;
    margin: 30px 0;

    @media (min-width: 800px) {
      flex-basis: 40%;
      margin: 30px;
    }

  }
}

</style>
