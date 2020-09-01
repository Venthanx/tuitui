<template>
  <div id="app">
    <router-view></router-view>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@import url(assets/css/normalize.css);
@import url(assets/css/base.css);

#app {
  width: 100%;
  height: 100%;
}
</style>
