<template lang='pug'>
  //.project-card
  g-link(:to='project.path').project-card
    h2(:style='{color: "#" + project.color}') {{ project.title }}
    //g-image(:src='project.image')
    p {{ project.description }}
    //g-link(:to='project.path') See more

</template>


<script>
export default {
  name: 'ProjectCard',
  props: ['project'],
}
</script>

<style lang='scss' scoped>

.project-card {
  position: relative;
  padding: 30px;
  margin: 30px;
  border-radius: 16px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  width: 85%;
  transition: transform .25s;
  cursor: pointer;
  color: inherit;

  &:hover {
    transform: scale(1.05);
  }
}

@include dark-theme {
  .project-card {
    background-color: #2d2d2d;
  } 
}


h2 {
  margin: 0;
}

img {
  position: relative;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
}

</style>

