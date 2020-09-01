<template>
  <div id="topbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#topbar {
  display: flex;
  height: 50px; 
  line-height: 50px;
  text-align: center; 
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
}

.left,
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
}
.center {
  flex: 1;
}

.left,
.right,
.center {
  /* 禁止文字被选中 */
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>