<template lang='pug'>
  nav
    g-link(to='/')
      g-image(src='@/favicon2.png' width='48px' height='48px')
    ul
      li
        g-link(to='/projects') Projects
      li
        g-link(to='/blog') Blog
      li
        LightModeIcon(class='theme-icon' v-if="darkThemeActive" @click='toggleDarkTheme')
        DarkModeIcon(class='theme-icon' v-if="!darkThemeActive" @click='toggleDarkTheme')

</template>

<script>
import DarkModeIcon from '@/assets/moon-solid.svg'
import LightModeIcon from '@/assets/sun-solid.svg'

export default {
  name: 'Header',
  data () {
    return {
      darkThemeActive: false,
    }
  },
  mounted () {
    const isDarkMode = document.querySelector('body').classList.contains('dark')

    if (isDarkMode) {
      this.toggleDarkTheme()
    }
  },
  methods: {
    toggleDarkTheme () {
      this.darkThemeActive = !this.darkThemeActive

      if (this.darkThemeActive) {
        document.querySelector('body').classList.toggle('dark', true)
        document.querySelector('body').classList.toggle('light', false)
      } else {
        document.querySelector('body').classList.toggle('dark', false)
        document.querySelector('body').classList.toggle('light', true)
      }
    },
  },
  components: {
    DarkModeIcon,
    LightModeIcon,
  },
}
</script>


<style lang="scss" scoped>

.theme-icon {
  width: 92px;
  height: 92px;
  padding: 30px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  //transition: background-color .5s;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
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
