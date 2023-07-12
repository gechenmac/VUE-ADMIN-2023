
<template>
    <div class="hello">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in arr" :key="index">
            <img :src="item.img_url" alt="">
          </div>
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- 指示点 -->
        <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>
</template>


<script>

import Swiper from "swiper";//引入swiper
export default {
  name: "HelloWorld",
  data() {
    return {
      swiper:'',
      index:'',
      arr:[
        {img_url:require('@/assets/a.png')},
        {img_url:require('@/assets/b.png')},
        {img_url:require('@/assets/c.png')},
        {img_url:require('@/assets/d.png')},
        {img_url:require('@/assets/e.png')}
      ]
    };
  },
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      autoplay: {//自动轮播
        disableOnInteraction: false,//当设置为false时，用户操作之后（swipes,arrow以及pagination 点击）autoplay不会被禁掉，用户操作之后每次都会重新启动autoplay。
      },
      pagination: {//指示点
        el: '.swiper-pagination',
        clickable :true
      },
      grabCursor : true,//鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
      loop: true,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
};
</script>


<style scoped>
.swiper-container {
  width: 100%;
  height: 100vh;
}
.swiper-slide img{
  width: 100%;
  height: 100%;
}
</style>