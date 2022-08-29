<template>
  <div ref="swiper" class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(skuImg, index) in skuImgList"
           :key="skuImg.id"
           class="swiper-slide">
        <img @click="changeImg(index)"
             :class="{'active':index===curIndex}"
             :src="skuImg.imgUrl">
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
    name: "index",
    data() {
        return {
            swiper: {},
            curIndex: 0
        }
    },
    props: ['skuImgList'],
    watch: {
        skuImgList() {
            this.$nextTick(() => {
                this.swiperInit();
            });
        }
    },
    methods: {
        swiperInit() {
            this.swiper = new Swiper(
                //使用ref来获取dom, vue不推荐操作真实dom
                this.$refs.swiper,
                {
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    /*每次显示几个图片*/
                    slidesPerView: 2,
                    /*点击切换几个*/
                    slidesPerGroup: 2
                }
            );
        },
        changeImg(index) {
            this.curIndex = index;
            this.$bus.$emit('changeImg', index);
        }
    },
}
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      //width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 56px;
      //height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;

    &::after {
      font-size: 12px;
    }
  }
}
</style>
