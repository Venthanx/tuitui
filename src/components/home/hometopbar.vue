<template>
  <div id="hometopbar">
    <topbar>
      <!-- <img class="left" slot="left" src="https://cdn-r-test-img.oss-cn-hangzhou.aliyuncs.com/b4e99920054a464bb237a105f36db305.png?x-oss-process=image/resize,w_500" alt=""> -->
      <div slot="left">小说</div>
      <div slot="center">
        <input type="text" placeholder="请输入书名/作者名">
      </div>
      <div slot="right">
        <img src="@/assets/img/ring.svg" alt="">
      </div>
    </topbar>
  </div>
</template>

<script>
import Topbar from "@/components/common/topbar";

export default {
 components: {
    Topbar,
  },
}
</script>

<style>
.left {
  color: #a6a6a6;
  font-size: 14px;
}

.center input {
  border: 0px;
  height: 30px;
  width: 100%;
  border-radius: 20px;
  outline: none;
  padding-left: 16px;
  box-sizing: border-box;
  background-color: #F6F7F9;
  font-size: 14px;
  color: #a6a6a6;
  caret-color: #a6a6a6;
}

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #a6a6a6;
  font-size: 14px;
}


.right {
  box-sizing: border-box;
  padding-top: 12px;
}
</style>