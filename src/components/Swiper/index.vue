<template>
  <!-- swiper容器 -->
  <div ref="swiper"
       class="swiper-container"
       :style="`--swiper-theme-color: ${themeColor}; --swiper-navigation-size: ${navigationSize}px;`">
    <!-- wrapper -->
    <!--当鼠标移上去使轮播图暂停 (必须加括号)-->
    <div @mouseenter="swiper.autoplay.stop()"
         @mouseleave="swiper.autoplay.start()"
         class="swiper-wrapper">
      <div v-for="(img, index) in imgList"
           :key="index"
           class="swiper-slide">
        <a href="javascript:"><img :src="img" alt=""></a>
      </div>
    </div>
    <!-- pagination分页 -->
    <div class="swiper-pagination"></div>

    <!-- navigation左右导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import '@/assets/css/reset.css'
import Swiper from "swiper";

export default {
    name: "Swiper",
    data() {
        return {
            swiper: {}
        }
    },
    props: ['imgList', 'themeColor', 'navigationSize'],
    watch: {
        imgList: {
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    this.swiperInit();
                });
            }
        }
    },
    methods: {
        swiperInit() {
            this.swiper = new Swiper(
                //使用ref来获取dom, vue不推荐操作真实dom
                this.$refs.swiper,
                {
                    direction: 'horizontal', //水平滑动(默认)
                    loop: true, // 循环模式选项,
                    //自动滑动
                    autoplay: {
                        delay: 3000,//1秒切换一次
                        // disableOnInteraction: false, //使操作后依旧能自动滑动
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                }
            );
        }
    }
}
</script>

<style scoped>
.swiper-container,
.swiper-container a,
.swiper-container img {
    width: 100%;
    height: 100%;
}
</style>
