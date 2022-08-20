<template>
  <div>
    <!--footer-->
    <div class="footer" :class="bgc">
      <div class="w">
        <ul v-show="$route.meta.footerShow" class="service-mode">
          <li>
            <div class="service-img"></div>
            <div class="service-text">
              <h5>正品保障</h5>
              <p>正品保障, 提供发票</p>
            </div>
          </li>
          <li>
            <div class="service-img"></div>
            <div class="service-text">
              <h5>正品保障</h5>
              <p>正品保障, 提供发票</p>
            </div>
          </li>
          <li>
            <div class="service-img"></div>
            <div class="service-text">
              <h5>正品保障</h5>
              <p>正品保障, 提供发票</p>
            </div>
          </li>
          <li>
            <div class="service-img"></div>
            <div class="service-text">
              <h5>正品保障</h5>
              <p>正品保障, 提供发票</p>
            </div>
          </li>
          <li>
            <div class="service-img"></div>
            <div class="service-text">
              <h5>正品保障</h5>
              <p>正品保障, 提供发票</p>
            </div>
          </li>
        </ul>

        <div v-show="$route.meta.footerShow" class="help-mode">
          <dl>
            <dt>特色服务</dt>
            <dd><a href="#">夺宝岛</a></dd>
            <dd><a href="#">DIY装机</a></dd>
            <dd><a href="#">延保服务</a></dd>
            <dd><a href="#">品优购E卡</a></dd>
            <dd><a href="#">品优购通信</a></dd>
          </dl>
          <dl>
            <dt>特色服务</dt>
            <dd><a href="#">夺宝岛</a></dd>
            <dd><a href="#">DIY装机</a></dd>
            <dd><a href="#">延保服务</a></dd>
            <dd><a href="#">品优购E卡</a></dd>
            <dd><a href="#">品优购通信</a></dd>
          </dl>
          <dl>
            <dt>特色服务</dt>
            <dd><a href="#">夺宝岛</a></dd>
            <dd><a href="#">DIY装机</a></dd>
            <dd><a href="#">延保服务</a></dd>
            <dd><a href="#">品优购E卡</a></dd>
            <dd><a href="#">品优购通信</a></dd>
          </dl>
          <dl>
            <dt>特色服务</dt>
            <dd><a href="#">夺宝岛</a></dd>
            <dd><a href="#">DIY装机</a></dd>
            <dd><a href="#">延保服务</a></dd>
            <dd><a href="#">品优购E卡</a></dd>
            <dd><a href="#">品优购通信</a></dd>
          </dl>
          <dl>
            <dt>特色服务</dt>
            <dd><a href="#">夺宝岛</a></dd>
            <dd><a href="#">DIY装机</a></dd>
            <dd><a href="#">延保服务</a></dd>
            <dd><a href="#">品优购E卡</a></dd>
            <dd><a href="#">品优购通信</a></dd>
          </dl>
          <dl class="help-item">
            <dt>帮助中心</dt>
            <dd class="help-img">
              <img src="./images/wx_cz.jpg" alt="">
            </dd>
            <dd>品优购客户端</dd>
          </dl>
        </div>

        <div class="about-mode">
          <ul class="about-us">
            <li><a href="#">关于我们</a></li>
            <li><a href="#">联系我们</a></li>
            <li><a href="#">联系客服</a></li>
            <li><a href="#">商家入驻</a></li>
            <li><a href="#">营销中心</a></li>
            <li><a href="#">手机品优购</a></li>
            <li><a href="#">友情销接</a></li>
            <li><a href="#">销售联盟</a></li>
            <li><a href="#">品优购社区</a></li>
            <li><a href="#">品优购公益</a></li>
            <li><a href="#">English Site</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <div class="contact-us">地址：北京市昌平区建材城西路金燕龙办公楼一层邮编：100096电话：400-618-4000传真：010-82935100邮箱：zhanghj+itcast.cn
          </div>
          <div class="">京ICP备08001421号京公网安备110108007702</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/reset.css'

export default {
  name: "index",
  computed: {
    bgc() {
      return this.$route.meta.footerShow ? '' : 'bgc-fff';
    }
  },
}
</script>

<style scoped lang="less">
/*版心*/
.w {
  width: 1200px;
  margin: 0 auto;
}

/*footer尾部*/
.footer {
  margin-top: 15px;
  background-color: #f5f5f5;

  .service-mode {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    padding: 30px 0;

    li {
      display: flex;
      align-items: center;
      width: 240px;
      height: 50px;
      padding-left: 35px;

      .service-img {
        width: 50px;
        height: 50px;
        background: url("images/icons.png") no-repeat -253px -2px;
      }

      .service-text {
        margin-left: 5px;

        h4 {
          font-size: 14px;
        }

        p {
          font-size: 12px;
        }
      }
    }
  }

  .help-mode {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;

    dl {
      width: 200px;
      padding: 20px 0 20px 50px;

      dt {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }

    .help-item {
      width: 140px;
      padding: 20px 0 0 50px;
      text-align: center;

      .help-img {
        width: 90px;
        height: 90px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .about-mode {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;

    .about-us {
      display: flex;

      li {
        padding: 0 10px;
        position: relative;

        &:after {
          content: "";
          width: 1px;
          height: 10px;
          background-color: #a3a3a3;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }
      }

      li:last-child:after {
        display: none;
      }
    }

    .contact-us {
      margin: 10px 0 5px;
    }
  }
}

.bgc-fff {
  background-color: #fff;
}

</style>
