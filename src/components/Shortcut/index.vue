<template>
  <!--快捷导航-->
  <div class="shortcut">
    <div class="w">
      <div class="left">
        <ul>
          <li class="welcome">购物商城欢迎您!</li>
          <li>
            <a @click.prevent="toLogin" href="#" class="login">请登录</a>
            <a @click.prevent="toRegist" href="#" class="regist font-red">免费注册</a>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul class="ul2">
          <li>
            <a href="#">我的订单</a>
          </li>
          <li class="arrow-icon">
            <a href="#">我的商城</a>
            <div class="drop-menu">
              <dl>
                <dt>更多精选</dt>
                <dd>
                  <div class="drop-item">
                    <a href="#">合作招商</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东通信</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东E卡</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">企业采购</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">服务市场</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">办公生活馆</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">校园加盟</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东社区</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">装机大师</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">知识产权维权</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">关于我们</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东安联保险</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东数科保险</a>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>更多精选</dt>
                <dd>
                  <div class="drop-item">
                    <a href="#">合作招商</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东通信</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东E卡</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">企业采购</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">服务市场</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">办公生活馆</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">校园加盟</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东社区</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">装机大师</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">知识产权维权</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">关于我们</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东安联保险</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东数科保险</a>
                  </div>
                </dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">商城会员</a>
          </li>
          <li>
            <a href="#">企业采购</a>
          </li>
          <li class="arrow-icon">
            <a href="#">关注商城</a>
            <div class="drop-menu">
              <dl>
                <dt>更多精选</dt>
                <dd>
                  <div class="drop-item">
                    <a href="#">合作招商</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东通信</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东E卡</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">企业采购</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">服务市场</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">办公生活馆</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">校园加盟</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东社区</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">装机大师</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">知识产权维权</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">关于我们</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东安联保险</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东数科保险</a>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>更多精选</dt>
                <dd>
                  <div class="drop-item">
                    <a href="#">合作招商</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东通信</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东E卡</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">企业采购</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">服务市场</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">办公生活馆</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">校园加盟</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东社区</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">装机大师</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">知识产权维权</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">关于我们</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东安联保险</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东数科保险</a>
                  </div>
                </dd>
              </dl>
            </div>
          </li>
          <li class="arrow-icon">
            <a href="#">客户服务</a>
            <div class="drop-menu">
              <dl>
                <dt>更多精选</dt>
                <dd>
                  <div class="drop-item">
                    <a href="#">合作招商</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东通信</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东E卡</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">企业采购</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">服务市场</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">办公生活馆</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">校园加盟</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东社区</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">装机大师</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">知识产权维权</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">关于我们</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东安联保险</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东数科保险</a>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>更多精选</dt>
                <dd>
                  <div class="drop-item">
                    <a href="#">合作招商</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东通信</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东E卡</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">企业采购</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">服务市场</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">办公生活馆</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">校园加盟</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东社区</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">装机大师</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">知识产权维权</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">关于我们</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东安联保险</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东数科保险</a>
                  </div>
                </dd>
              </dl>
            </div>
          </li>
          <li class="arrow-icon">
            <a href="#">网站导航</a>
            <div class="drop-menu">
              <dl>
                <dt>更多精选</dt>
                <dd>
                  <div class="drop-item">
                    <a href="#">合作招商</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东通信</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东E卡</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">企业采购</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">服务市场</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">办公生活馆</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">校园加盟</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东社区</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">装机大师</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">知识产权维权</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">关于我们</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东安联保险</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东数科保险</a>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>更多精选</dt>
                <dd>
                  <div class="drop-item">
                    <a href="#">合作招商</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东通信</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东E卡</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">企业采购</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">服务市场</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">办公生活馆</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">校园加盟</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东社区</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">装机大师</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">知识产权维权</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">关于我们</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东安联保险</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东数科保险</a>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>更多精选</dt>
                <dd>
                  <div class="drop-item">
                    <a href="#">合作招商</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东通信</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东E卡</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">企业采购</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">服务市场</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">办公生活馆</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">校园加盟</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东社区</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">装机大师</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">知识产权维权</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">关于我们</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东安联保险</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东数科保险</a>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>更多精选</dt>
                <dd>
                  <div class="drop-item">
                    <a href="#">合作招商</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东通信</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东E卡</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">企业采购</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">服务市场</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">办公生活馆</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">校园加盟</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东社区</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">装机大师</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">知识产权维权</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">关于我们</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东安联保险</a>
                  </div>
                  <div class="drop-item">
                    <a href="#">京东数科保险</a>
                  </div>
                </dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    toLogin() {
      this.$router.push('/login');
    },

    toRegist() {
      this.$router.push('/regist');
    }

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

.font-red {
  color: @mallRed;
}

/*快捷导航*/
.shortcut {
  height: 31px;
  background-color: #f1f1f1;

  > div {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      line-height: 31px;
    }

    .left ul {
      .welcome {
        margin-right: 15px;
      }

      li a {
        display: inline-block;
      }

      li .login {
        margin-right: 10px;
      }
    }

    .right ul {
      li {
        position: relative;
        margin: 0 5px;

        > a {
          display: inline-block;
          padding: 0 10px;
        }

        &:after {
          content: '';
          display: block;
          width: 1px;
          height: 12px;
          background-color: #ccc;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -6px;
        }

        &:last-child:after {
          display: none;
        }

        .drop-menu {
          display: none;
          position: absolute;
          right: 0;
          background-color: #fff;
          padding: 20px 0 20px 20px;

          dl {
            dt {
              font-weight: bold;
            }

            dd {
              width: 300px;
              display: flex;
              flex-wrap: wrap;

              div {
                flex: 33%;
              }
            }
          }
        }
      }

      .arrow-icon {
        > a:after {
          content: '\e6cc';
          font-family: iconfont;
          font-size: 10px;
          font-weight: bold;
          margin-left: 5px;
        }

        > a:hover {
          color: #666;
        }

        &:hover {
          background-color: #fff;
          filter: drop-shadow(0 0 2px rgba(0, 0, 0, .3));
          z-index: 1;

          .drop-menu {
            display: flex;
          }
        }
      }
    }
  }
}
</style>
