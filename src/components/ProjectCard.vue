<template lang='pug'>
  g-link(:to='project.path' :style='{backgroundColor: "#" + project.color}').project-card
    h2 {{ project.title }}
    p {{ project.description }}

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
  border-radius: 16px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  transition: transform .25s;
  cursor: pointer;
  color: $heading-color-dark;


  &:hover {
    transform: scale(1.05);
  }

  h2 {
    margin: 0;
    color: $heading-color-dark;
  }
}

img {
  position: relative;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
}

</style>

