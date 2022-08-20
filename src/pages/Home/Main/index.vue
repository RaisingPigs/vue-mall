<template>
  <!--main-->
  <div class="w">
    <div class="main">
      <!--焦点图-->
      <div class="focus">
        <!-- Slider main container -->
        <Swiper :img-list="bannerList"
                navigation-size="30"
                theme-color="#f2f2f2"/>
      </div>

      <!--快报-->
      <div class="new-flash">
        <div class="news">
          <div class="news-hd">
            <h5>品优购快报</h5>
            <a href="#">
              <span>更多</span><span class="iconfont icon-xiangyoujiantou arrow-icon"></span>
            </a>
          </div>
          <ul class="news-bd">
            <li>
              <a href="#">
                <span>[特惠]</span>
                <span>备战开学季全民半价购数码</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>[公告]</span>
                <span>品优稳占家电网购六成份额网购六成份额</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>[特惠]</span>
                <span>百元中秋全品类礼券限量领类礼券限量领类礼券限量领</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>[公告]</span>
                <span>上品优生鲜享阳澄湖大闸塑</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>[特惠]</span>
                <span>每日享折扣品优品质游</span>
              </a>
            </li>
          </ul>
        </div>
        <ul class="life-service">
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div></div>
              <span>话费</span>
            </a>
          </li>
        </ul>
        <div class="flash-ad">
          <a href="#">
            <img src="/upload/ad1.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import Swiper from 'swiper'

export default {
    name: "index",
    data() {
        return {
            swiper: {}
        }
    },
    computed: {
        ...mapState(
            'home',
            [
                'bannerList'
            ]
        )
    },
    methods: {
        ...mapActions('home', {getBanners: 'bannerList'}),
    },
    mounted() {
        this.getBanners();
    },
}
</script>

<style scoped lang="less">
@mallRed: #b1191a;

/*版心*/
.w {
  width: 1200px;
  margin: 0 auto;
}

/*main*/
.main {
  display: flex;
  width: 980px;
  height: 450px;
  margin-left: 210px;
  margin-top: 10px;

  .focus {
    width: 721px;
    height: 450px;
  }

  .new-flash {
    width: 250px;
    height: 450px;
    margin-left: 10px;

    .news {
      height: 165px;
      border: 1px solid #f2f2f2;

      .news-hd {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 33px;
        padding: 5px 10px;
        border-bottom: 1px solid #f2f2f2;

        h5 {
          font-size: 14px;
        }

        .arrow-icon {
          font-size: 10px;
        }
      }

      .news-bd {
        padding: 5px 10px;
        height: 132px;

        li {
          height: 24px;

          a {
            width: 100%;
            height: 100%;
            display: inline-block;
            padding: 3px 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;


            span:nth-child(1) {
              font-weight: bold;
            }
          }
        }
      }
    }

    .life-service {
      display: flex;
      flex-wrap: wrap;
      height: 195px;

      li {
        flex: 25%;
        border: 1px solid #f2f2f2;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          div:nth-child(1) {
            width: 40px;
            height: 40px;
            background: url("./images/icons.png") no-repeat -8px -8px;
          }
        }
      }
    }

    .flash-ad {
      width: 250px;
      height: 85px;
      margin-top: 5px;

      a {
        display: inline-block;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
