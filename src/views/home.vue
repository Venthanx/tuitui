<template>
  <div id="home">
    <hometopbar></hometopbar>
    <listpage></listpage>
  </div>
</template>

<script>
import Hometopbar from "@/components/home/hometopbar";
import Listpage from "@/components/home/listpage";

export default {
  components: {
    Hometopbar,
    Listpage,
  },
}
</script>

<style>
#home {
  width: 100%;
  height: 100%;

}
</style>