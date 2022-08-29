<template>
  <div v-if="skuImgList" class="spec-preview">
    <vue-photo-zoom-pro :url="skuImgList[index].imgUrl"/>
  </div>
</template>

<script>
import VuePhotoZoomPro from 'vue-photo-zoom-pro'
import 'vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css'

export default {
    name: "index",
    components: {
        VuePhotoZoomPro,
    },
    data() {
        return {
            index: 0
        }
    },
    props: ['skuImgList'],
    methods: {
        changeImg(index) {
            this.index = index;
        }
    },
    mounted() {
        this.$bus.$on('changeImg', this.changeImg);
    },
    beforeDestroy() {
        this.$bus.$off('changeImg');
    }
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
}

/*.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}*/
</style>
