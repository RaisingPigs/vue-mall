<template>
  <!--header-->
  <div class="header w">
    <div class="logo">
      <h1>
        <a @click.prevent="toHome" href="#" title="品优购">
          <img src="./images/logo.png" alt="品优购">
        </a>
      </h1>
    </div>
    <div class="search-area">
      <div class="search">
        <input v-model.trim="searchKey" type="text" placeholder="请输入内容..">
        <button @click="toSearch">搜索</button>
      </div>
      <div class="hotkeys">
        <ul>
          <li><a class="font-red" href="#">优惠购首发</a></li>
          <li><a href="#">亿元优惠</a></li>
          <li><a href="#">9.9元团购</a></li>
          <li><a href="#">美满99减30</a></li>
          <li><a href="#">办公用品</a></li>
          <li><a href="#">电脑</a></li>
          <li><a href="#">通信</a></li>
        </ul>
      </div>
    </div>
    <div class="shopcart">
      <span class="iconfont icon-gouwuche shopcart-icon"></span>
      <span>我的购物车</span>
      <span class="iconfont icon-xiangyoujiantou arrow-icon"></span>
    </div>
  </div>
</template>

<script>
import '@/assets/css/reset.css'

export default {
    name: "Header",
    data() {
        return {
            'searchKey': ''
        }
    },
    methods: {
        toSearch() {
            this.$router.push({
                name: 'search',
                params: {
                    searchKey: this.searchKey || undefined
                },
                query: this.$route.query
            });
        },

        toHome() {
            this.$router.push('/home');
        },
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

/*header头部*/
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px;
  //background-color: skyblue;

  .logo {
    width: 171px;
    height: 61px;

    h1 a {
      width: 171px;
      height: 61px;
      display: inline-block;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .search-area {
    .search {
      width: 538px;
      height: 36px;
      border: 2px solid @mallRed;
      display: flex;

      input,
      button {
        height: 32px;
      }

      input {
        width: 455px;
        text-indent: 1em;
        font-size: 14px;
      }

      button {
        width: 82px;
        background-color: @mallRed;
        color: #ffffff;
        font-size: 16px;
      }
    }

    .hotkeys {
      ul {
        display: flex;
        align-items: center;
        margin-top: 5px;

        li {
          margin-right: 15px;

          a {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .shopcart {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 140px;
    height: 35px;
    border: 1px solid #dfdfdf;
    background-color: #f7f7f7;
    font-size: 14px;
    margin: 0 60px 25px 0;
    position: relative;

    .shopcart-icon {
      margin-right: 2px;
      color: @mallRed;
    }

    .arrow-icon {
      width: 12px;
      height: 16px;
      margin-left: 5px;
      font-size: 10px;
    }

    &:hover {
      cursor: pointer;
      background-color: #f4f4f4;
      color: @mallRed;
    }

    &:after {
      content: "2";
      min-width: 15px;
      height: 15px;
      font-size: 10px;
      color: #ffffff;
      text-align: center;
      line-height: 11px;
      padding: 2px 5px;
      background-color: @mallRed;
      border-radius: 7.5px;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
}
</style>
