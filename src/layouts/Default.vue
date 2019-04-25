<template lang='pug'>
  .app
    Header
    main
      slot
    Footer
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
  },
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang='scss'>

</style>
