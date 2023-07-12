<template>
  <div>
<!--  焦点图切换  -->
      <a-row :gutter='[16,16]'>
        <a-col :lg='24' :md='24' :sm='24'>
          <div class="swiper-container">
      <div class="wrapper">
        <div class="hello">
          <!-- 第一个轮播 -->
          <div
              class="banner1 swiper-container"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in arr1" :key="index">
                <!-- <img src="../assets/logo.png" alt=""> -->
                <img :src="item.img_url" alt>
              </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <!-- 指示点 -->
            <div class="swiper-pagination"></div>
            <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
          </div>

        </div>
      </div>
          </div>
        </a-col>
      </a-row>
<!--产品-->
      <a-row :gutter='[16,16]'>
        <a-col :lg='24' :md='24' :sm='24'>
          <order-list-info :apply='apply' />
        </a-col>
      </a-row>
    </div>
</template>


<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
// 引入的组件
import orderListInfo from '@/pages/Home/moudules/product.vue'

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    orderListInfo,
  },

  data(){
    return{
      swiper1: "",
      swiper2: "",
      arr1: [
        { img_url: require("@/assets/a.png") },
        { img_url: require("@/assets/b.png") },
        { img_url: require("@/assets/c.png") },
        { img_url: require("@/assets/d.png") },
        { img_url: require("@/assets/e.png") }
      ],
      arr2: [
        { img_url: require("@/assets/a.png") },
        { img_url: require("@/assets/b.png") },
        { img_url: require("@/assets/c.png") },
        { img_url: require("@/assets/d.png") },
        { img_url: require("@/assets/e.png") }
      ],
    }
  },
  props: {
    apply: {
      type: Object,
      require: true
    }
  },
  mounted() {
    this.swiper1 = new Swiper(".banner1", {
      autoplay: {
        //自动轮播
        disableOnInteraction: false //当设置为false时，用户操作之后（swipes,arrow以及pagination 点击）autoplay不会被禁掉，用户操作之后每次都会重新启动autoplay。
      },
      pagination: {
        //指示点
        el: ".swiper-pagination",
        clickable :true //为true时点击指示点会切换slide
      },
      grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
      loop: true,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  },
  methods: {
    /*鼠标移入停止轮播,5秒后继续轮播，鼠标离开 继续轮播*/
    comtainer_enter1() {
      this.swiper1.autoplay.stop();
      setTimeout(this.comtainer_leave1, 2000); //两秒加上默认的三秒
    },
    comtainer_leave1() {
      this.swiper1.autoplay.start();
    },
  },


};
</script>

<style>
.swiper-container {
  background: #f00;
  height: 100vh;
}
.swiper-slide {
  height: 150px;
}


//  若是修改默认样式，以下内容必须填写
.wrapper{
  position: relative;
}
.wrapper .swiper-button-nextsp,
.wrapper .swiper-button-prevsp {
  position: absolute;
  width: 40px;
  height: 40px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  z-index: 22222;
}
.wrapper .swiper-button-prevsp {
  background: url("~@/assets/images/index/pageleft.png") no-repeat center center;
  left: 5%;
  top: 199px;
}
.wrapper .swiper-button-prevsp::after,.teacher-swiper .swiper-button-nextsp::after{
  content: '';
}
.wrapper .swiper-button-prevsp:hover {
  background: url("~@/assets/images/index/leftCur.png") no-repeat center center;
}
.wrapper .swiper-button-nextsp {
  background: url("~@/assets/images/index/pageright.png") no-repeat center center;
  right: 5%;
  top: 199px;
}


.wrapper .swiper-button-nextsp:hover {
  background: url("~@/assets/images/index/rightCur.png") no-repeat center center;
}
</style>
