<template>
  <!--nav-->
  <div class="nav">
    <div class="w">
      <div class="drop-down">
        <div class="category-title">全部商品分类</div>
        <ul class="category-menu">
          <li v-for="(firstCategory, index) in categoryList"
              :key="firstCategory.categoryId">
            <a href="#">
              <span>{{firstCategory.categoryName}}</span>
              <span class="iconfont icon-xiangyoujiantou"></span>
            </a>
            <div class="item-list">
              <dl v-for="secondCategory in firstCategory.categoryChild"
                  :key="secondCategory.categoryId">
                <dt>{{secondCategory.categoryName}}</dt>
                <dd>
                  <span v-for="thirdCategory in secondCategory.categoryChild"
                        :key="thirdCategory.categoryChild">
                    {{thirdCategory.categoryName}}
                  </span>
                </dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
      <ul class="nav-menu">
        <li><a href="#">服装城</a></li>
        <li><a href="#">美妆馆</a></li>
        <li><a href="#">传智超市</a></li>
        <li><a href="#">全球购</a></li>
        <li><a href="#">闪购 </a></li>
        <li><a href="#">团购</a></li>
        <li><a href="#">拍卖</a></li>
        <li><a href="#">有趣</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
//导入获取state数据和action的类
import {mapState, mapActions} from "vuex";

export default {
  name: "TypeNav",
  computed: {
    //获取home模块下的categoryList数据
    ...mapState('home', ['categoryList'])
  },
  methods: {
    //调用getCategoryList()后, 会调用home模块中actions中的categoryList()方法
    ...mapActions('home', {getCategoryList: 'categoryList'})
  },
  mounted() {
    this.getCategoryList();
  }
}
</script>

<style scoped lang="less">

@mallRed: #b1191a;

/*版心*/
.w {
  width: 1200px;
  margin: 0 auto;
}

/*nav*/
.nav {
  height: 47px;
  color: @mallRed;
  border-bottom: 2px solid @mallRed;

  > div {
    display: flex;

    .drop-down {
      position: relative;

      .category-title {
        width: 200px;
        height: 45px;
        text-align: center;
        line-height: 47px;
        font-size: 16px;
        background-color: @mallRed;
        color: #ffffff;
      }

      .category-menu {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 47px;
        left: 0;
        background-color: #c81521;

        li {
          width: 200px;
          height: 30.7px;
          border-left: 1px #c81521 solid;

          a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
            //line-height: 21px;
            color: #ffffff;
            padding: 5px 10px;

            span:last-child {
              font-size: 10px;
            }
          }

          .item-list {
            display: none;

            width: 731px;
            height: 460px;
            position: absolute;
            top: 0;
            left: 200px;
            background-color: #f2f2f2;
            padding: 10px 10px;

            dl {
              display: flex;
              color: #666;
              margin: 12px 0;

              dt {
                flex-shrink: 0;
                width: 70px;
                height: 18px;
                line-height: 18px;
                text-align: right;
                font-weight: bold;
                padding-right: 10px;
                position: relative;

                &:after {
                  content: '';
                  width: 1px;
                  height: 14px;
                  top: 3px;
                  right: 0;
                  background-color: #cccccc;
                  position: absolute;
                }
              }

              dd {
                padding: 0 10px;

                span {
                  display: inline-block;
                  margin: 2px 10px 2px 0;

                  &:hover {
                    color: @mallRed;
                    cursor: pointer;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: #fff;

            a {
              color: #c81521;
            }

            .item-list {
              display: block;
            }
          }
        }
      }
    }

    .nav-menu {
      display: flex;
      align-items: center;
      margin-left: 20px;

      li {
        a {
          height: 45px;
          font-size: 14px;
          display: inline-block;
          line-height: 45px;
          margin: 0 25px;
          text-align: center;
        }
      }
    }
  }
}
</style>
