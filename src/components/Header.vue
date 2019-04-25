<template lang='pug'>
  nav
    g-link(to='/')
      g-image(src='@/favicon.png' width='48px' height='48px')
    ul
      li
        g-link(to='/projects') Projects
      li
        g-link(to='/blog') Blog

</template>

<style lang="scss" scoped>

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      a {
        padding: 30px;
        text-decoration: none;
        font-weight: bold;
        &.active {
          color: $primary-color;
        }
      }
    }
  }
}

@include light-theme {
  a {
    color: $text-color-light;
  }
}

@include dark-theme {
  a {
    color: $text-color-dark;
  }
}

</style>
