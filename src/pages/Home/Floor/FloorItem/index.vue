<template>
  <ul v-if="Object.keys(floorItem).length" class="tab-content">
    <li class="tab-content-item active">
      <div>
        <ul>
          <li v-for="(word, index) in floorItem.keywords"
              :key="index">
            {{word}}
          </li>
        </ul>
        <div>
          <img :src="floorItem.imgUrl" alt="">
        </div>
      </div>
      <div>
        <Swiper :img-list="floorItem.carouselList"
                navigation-size="20"
                theme-color="#f2f2f2"/>
      </div>
      <div>
        <div>
          <div class="w220h180">
            <img :src="floorItem.recommendList[0]" alt="">
          </div>
          <div class="w220h180">
            <img :src="floorItem.recommendList[1]" alt="">
          </div>
        </div>
        <div class="w220h360">
          <img :src="floorItem.bigImg" alt="">
        </div>
        <div>
          <div class="w220h180">
            <img :src="floorItem.recommendList[2]" alt="">
          </div>
          <div class="w220h180">
            <img :src="floorItem.recommendList[3]" alt="">
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
    name: "index",
    props: ['floorItem']
}
</script>

<style scoped lang="less">
@mallRed: #b1191a;

.tab-content {
  .tab-content-item {
    display: none;
    height: 360px;

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 210px;
      height: 360px;
      padding: 10px;
      background-color: #fbfbfb;

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          width: 80px;
          margin: 0 5px;
          text-align: center;
          padding: 5px 0;
          border-bottom: 1px solid #f2f2f2;

          &:hover {
            color: @mallRed;
            cursor: pointer;
          }
        }
      }

      > div {
        width: 187px;
        height: 227px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    > div:nth-child(2) {
      width: 330px;
      height: 360px;
    }

    > div:nth-child(3) {
      display: flex;
      width: 660px;
      height: 360px;
      border: 1px solid #f2f2f2;

      .w220h180 {
        width: 220px;
        height: 179px;
        border-bottom: 1px solid #f2f2f2;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .w220h360 {
        width: 220px;
        height: 358px;
        border-left: 1px solid #f2f2f2;
        border-right: 1px solid #f2f2f2;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .active {
    display: flex;
  }
}
</style>
