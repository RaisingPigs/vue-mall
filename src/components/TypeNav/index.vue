<template>
  <!--nav-->
  <div class="nav">
    <div class="w">
      <div class="drop-down"
           @click="toSearch">
        <div @mouseenter="changeCategoryShow"
             @mouseleave="changeCategoryShow">
          <div class="category-title">
            全部商品分类
          </div>
          <transition name="menu">
            <ul v-show="categoryShow"
                class="category-menu">
              <li @mouseenter="saveIndex(index)"
                  @mouseleave="resetIndex"
                  :class="{'active':index===curIndex}"
                  v-for="(c1, index) in categoryList"
                  :key="c1.categoryId">
                <a :data-categoryName="c1.categoryName"
                   :data-category1Id="c1.categoryId"
                   href="javascript:">
              <span :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId">
                {{c1.categoryName}}
              </span>
                  <span :data-categoryName="c1.categoryName"
                        :data-category1Id="c1.categoryId"
                        class="iconfont icon-xiangyoujiantou">
              </span>
                </a>
                <div class="item-list">
                  <dl v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId">
                    <dt :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId">
                      {{c2.categoryName}}
                    </dt>
                    <dd>
                  <span :data-categoryName="c3.categoryName"
                        :data-category3Id="c3.categoryId"
                        v-for="c3 in c2.categoryChild"
                        :key="c3.categoryId">
                    {{c3.categoryName}}
                  </span>
                    </dd>
                  </dl>
                </div>
              </li>
            </ul>
          </transition>
        </div>
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
import '@/assets/css/reset.css'
//导入获取state数据和action的类
import {mapState} from "vuex";
//按需引入lodash的throttle
import {debounce} from 'lodash';

import 'animate.css'

export default {
    name: "TypeNav",
    data() {
        return {
            curIndex: -1,
            categoryShow: this.$route.name === 'home'
        }
    },
    computed: {
        //获取home模块下的categoryList数据
        ...mapState('home', ['categoryList'])
    },
    methods: {
        // saveIndex: debounce(function (index) {
        //     this.curIndex = index;
        // }, 50),
        //
        // resetIndex: debounce(function () {
        //     this.curIndex = -1;
        // }, 50),

        saveIndex(index) {
            this.curIndex = index;
        },

        resetIndex() {
            this.curIndex = -1;
        },

        toSearch(event) {
            let categoryName = event.target.dataset.categoryname;
            let category1Id = event.target.dataset.category1id;
            let category2Id = event.target.dataset.category2id;
            let category3Id = event.target.dataset.category3id;
            if (!categoryName) {
                return;
            }
            let location = {
                name: 'search',
                query: {
                    categoryName
                },
                params: this.$route.params
            }

            if (category1Id) {
                location.query.category1Id = category1Id;
            } else if (category2Id) {
                location.query.category2Id = category2Id;
            } else {
                location.query.category3Id = category3Id;
            }

            this.$router.push(location);
        },

        changeCategoryShow() {
            if (this.$route.name !== 'home') {
                this.categoryShow = !this.categoryShow;
            }
        }
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
        position: absolute;
        top: 47px;
        left: 0;
        height: 460px;
        background-color: #c81521;
        z-index: 2;

        li {
          width: 200px;
          height: 30.667px;
          border-left: 1px #c81521 solid;

          a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
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

                &:hover {
                  color: @mallRed;
                  cursor: pointer;
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

        }

        .active {
          background-color: #fff;

          a {
            color: #c81521;
          }

          .item-list {
            display: block;
          }
        }
      }

      /*过渡动画开始状态 (进入)*/

      .menu-enter {
        height: 0;
      }

      /*过渡动画结束状态 (进入)*/

      .menu-enter-to {
        height: 460px;
      }

      /*定义动画的时间和速率*/

      .menu-enter-active {
        transition: all .3s linear;
        overflow: hidden;
      }

      /*过渡动画开始状态 (离开)*/

      .menu-leave {
        height: 460px;
      }

      /*过渡动画结束状态 (离开)*/

      .menu-leave-to {
        height: 0;
      }

      /*定义动画的时间和速率*/

      .menu-leave-active {
        transition: all .3s linear;
        overflow: hidden;
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
