<template>
  <div id="listpage">
    <ul class="listtab">
      <li class="title active" ref="lastest" @click="lastest">最新</li>
      <li class="title" ref="hottest" @click="hottest">最热</li>
    </ul>

    <div class="novellist">
      <ul class="thelist active" ref="lastestlist">
        <li class="content">
          <img src="@/assets/img/novelcover.jpg">
          <div class="novelinfo">
            <div class="noveltitle">犯罪心理档案</div>
            <div class="author">雪影</div>
            <div class="subscribe">45人订阅</div>
            <div class="updatetime">最近更新时间：2018-12-24</div>
          </div>
        </li>
        <li class="content">
          <img src="@/assets/img/novelcover.jpg">
          <div class="novelinfo">
            <div class="noveltitle">犯罪心理档案</div>
            <div class="author">雪影</div>
            <div class="subscribe">45人订阅</div>
            <div class="updatetime">最近更新时间：2018-12-24</div>
          </div>
        </li>
      </ul>
      <ul class="thelist" ref="hottestlist">
        <li class="content">c最热</li>
        <li class="content">d</li>
      </ul>
    </div>

    <div class="lookmore">查看更多</div>

    <div class="nomore">
			<div class="line"></div>
			<p>暂无更多</p>
			<div class="line"></div>
		</div>

  </div>
</template>

<script>
export default {
methods: {
  lastest(){
    this.$refs.hottest.className = 'title';
    this.$refs.lastest.className = 'title active';
    this.$refs.hottestlist.className = 'thelist';
    this.$refs.lastestlist.className = 'thelist active';
  },
  hottest(){
    this.$refs.lastest.className = 'title';
    this.$refs.hottest.className = 'title active';
    this.$refs.lastestlist.className = 'thelist';
    this.$refs.hottestlist.className = 'thelist active';
  }
}
};

</script>

<style>
.listtab {
  height: 50px;
  line-height: 50px;
  display: flex;
  padding-left: 10px;
  /* padding-bottom: 6px; */
}
.listtab .title {
  padding: 4px 12px;
  font-size: 20px;
  color: #bbb9b9;
}

.listtab .active {
  line-height: 46px;
  font-size: 24px;
  color: #ff814e;
}

.novellist {
  padding-left: 20px;
  
}
.novellist .thelist {
  display: none;
}
.novellist .active {
  display: block;
}

.novellist .thelist .content {
  width: 320px;
  height: 120px;
  display: flex;
  font-size: 14px;
  padding: 20px 0;
  position: relative;
}
.novellist .thelist .content img {
  width: 82px;
  height: 120px;
}
.novellist .thelist .content .novelinfo {
  padding-left: 18px;
}
.novellist .thelist .content .novelinfo .noveltitle{
  font-size: 20px;
  overflow: hidden;
}
.novellist .thelist .content .novelinfo .author {
  margin: 17px 0;
}
.novellist .thelist .content .novelinfo .subscribe {
  color: #a6a6a6;
}
.novellist .thelist .content .novelinfo .updatetime {
  margin-top: 16px;
  color: #a6a6a6;
}
.novellist .thelist .content::after {
  content: '';
  width: 330px;
  height: 1px;
  background-color: #d6d6d6a4;
  position: absolute;
  bottom: 0;
  left: -5px;
}

.novellist .thelist .content:first-child {
  padding-top: 10px;
}



.lookmore {
  /* font: 14px/2em sans-serif, SimSun, Arial; */
  font-size: 12px;
  -webkit-tap-highlight-color: transparent; /* touch时取消高亮 */
  background-color: #ffffff;
  cursor: pointer;
  margin: 10px auto;
  width: 80px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #d9dde1;
  color: #a6a6a6;
  border-radius: 10px;
  text-align: center;
}

.nomore {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.nomore .line {
    width: 40px;
    height: 1px;
    margin-top: 12px;
    background-color: #e0e0e0;
}
.nomore p {
    color: #c9c9c9;
    font-size: 0.37333rem;
    padding: 0 6px;
}

</style>