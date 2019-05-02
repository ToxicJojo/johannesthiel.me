<template lang='pug'>
  footer
    p.copyright Copyright ©2019 Johannes Thiel
</template>

<style lang="scss" scoped>

footer {
  padding: 30px;
  margin-top: 30px;
}

@include light-theme {
  footer {
    background-color: #efefef;
  }
}

@include dark-theme {
  footer {
    background-color: #2d2d2d;
  }
}

.copyright {
  width: 100%;
  margin: 0;
  text-align: center;
}

</style>
