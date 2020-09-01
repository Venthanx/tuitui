<template>
  <div id="navbar">
    <div class="navitem" @click="homeclick">首页</div>
    <!-- <div class="navitem">234</div> -->
    <div class="navitem" @click="profileclick">我的</div>
  </div>
</template>

<script>
export default {

  methods: {
    homeclick(){
      this.$router.push("/Home");
    },
    profileclick(){
      this.$router.push("/Profile");
    }
  }
}
</script>

<style>
#navbar {
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 82px;
  line-height: 82px;
  box-shadow: 0px -2px 8px -2px rgba(177, 177, 177, 0.4);

  display: flex;
  text-align: center;
}

.navitem {
  flex: 1;
  /* border: 1px solid #111; */
  /* color: aqua; */
}

</style>