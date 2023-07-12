
<template>
    <div class="hello">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in arr" :key="index">
            <div class="slogan">
              <h1></h1>
              <h5></h5>
              <p></p>
              <a></a>
            </div>
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
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Swiper from "swiper";//引入swiper
export default {
  name: "HelloWorld",
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
      swiper:'',
      index:'',
      arr:[
        {img_url:require('@/assets/images/banner/slide-1.jpg')},
        {img_url:require('@/assets/images/banner/slide-2.jpg')},
        {img_url:require('@/assets/images/banner/slide-3.jpg')},
        {img_url:require('@/assets/images/banner/slide-1.png')},
      ]
    };
  },
  mounted() {
    this.swiper = new Swiper(".swiper", {
      /*autoplay: true,*/
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      }, //可选选项，自动滑动
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
.swiper {
  width: 100%;
  height: 100vh;
}
.swiper-slide img{
  position: relative;
  object-fit: contain;
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-position: center center;
}

.slogan{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 70px;
}
</style>