<template lang='pug'>
  Layout
    section.project
      //.header(:style='{backgroundColor: "#" + project.color}')
      .header(:style='{backgroundImage: backgroundGradient}')
        h1 {{ project.title }} 
        //g-image(:src='project.image')
        g-image(src='@/assets/gwent-cards.png')
        .link-row
          a(:href='project.github')
            GithubIcon(class='link-icon')
          a(:href='project.website')
            LinkIcon(class='link-icon')
      .content
        div(v-html='project.content') {{ project.content }}
</template>


<page-query>

query Project ($path: String!) {
  project: project (path: $path) {
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
</page-query>

<script>
import GithubIcon from '@/assets/github-brands.svg'
import LinkIcon from '@/assets/link-solid.svg'

function LightenDarkenColor(col,amt) {
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

export default {
  name: 'Project',
  computed: {
    project () {
      return this.$page.project
    },
    backgroundGradient () {
      return `linear-gradient(#${this.project.color}, #${LightenDarkenColor(this.project.color, -15)})`
    },
  },
  mounted () {
    document.querySelector('nav').style.backgroundColor = `#${this.project.color}`
  },
  components: {
    GithubIcon,
    LinkIcon,
  },
}
</script>

<style lang="scss" scoped>

.header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px;

  h1 {
    font-size: 3em;
    text-align: center;
    margin-top: 30px;
    color: $heading-color-dark;
  }

  img {
    border-radius: 16px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    margin: 30px;
    max-width: 729px;
    width: 100%;
    height: auto;
  }

  .link-row {
    position: absolute;
    bottom: -60px;
   display: flex;

    a {
      display: flex;
      padding: 16px;
      margin: 30px;
      border-radius: 100%;
      box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.35);
      transition: transform .25;

      &:hover {
        transform: scale(1.05);
      }

      .link-icon {
        width: 32px;
        height: 32px;
      }
    }
  }
}

.content {
  max-width: 1024px;
  margin: auto;
  padding: 30px;
}

@include light-theme {
  .link-row {
    a {
      background-color: $body-background-light;
      color: $heading-color-light;
    }
  }
}

@include dark-theme {
  .link-row {
    a {
      background-color: $body-background-dark;
      color: $heading-color-dark;
    }
  }
}


</style>
