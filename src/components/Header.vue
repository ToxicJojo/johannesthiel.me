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
      padding: 30px;
      a {
        text-decoration: none;
      }
    }
  }
}

@include light-theme {
  nav {
    background-color: $body-background-light;
  }
}

@include dark-theme {
  nav {
    background-color: $body-background-dark;
  }
}

</style>
