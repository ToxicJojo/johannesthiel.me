<template lang='pug'>
  div.layout
    header.header
      strong
        g-link(to="/") {{ $static.metaData.siteName }}
      nav.nav
        g-link.nav__link(to="/") Home
    slot
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang='scss'>

</style>
