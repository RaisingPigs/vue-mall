<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul v-for="cartItem in shopcartList"
            :key="cartItem.id"
            class="cart-list">
          <li class="cart-list-con1">
            <input @change="updateCheck(cartItem)" v-model="cartItem.isChecked" type="checkbox" name="chk_list">
          </li>
          <li class="cart-list-con2">
            <img :src="cartItem.imgUrl">
            <div class="item-msg">{{cartItem.skuName}}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{cartItem.cartPrice}}</span>
          </li>
          <li class="cart-list-con5">
            <a @click.prevent="subCartNum(cartItem)"
               href="javascript:void(0)"
               class="mins"
               :class="{'disabled': cartItem.skuNum<=1}">
              -
            </a>
            <input autocomplete="off"
                   type="text"
                   v-model.number="cartItem.skuNum"
                   class="itxt"
                   disabled>
            <a @click.prevent="addCartNum(cartItem)"
               href="javascript:void(0)"
               class="plus"
               :class="{'disabled': cartItem.skuNum>=9999}">
              +
            </a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{cartItem.totalPrice}}</span>
          </li>
          <li class="cart-list-con7">
            <a @click.prevent="handleDelCartItem(cartItem)"
               href="#" class="sindelet">删除</a>
            <br>
            <a href="#">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input @click="checkAll"
               :checked="isAllCheck"
               class="chooseAll"
               type="checkbox">
        <span>全选</span>
      </div>
      <div class="option">
        <a @click.prevent="delCheckedCartItems" href="#">删除选中的商品</a>
        <a href="#">移到我的关注</a>
        <a href="#">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>{{totalCount.count}}</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{totalCount.sum}}</i>
        </div>
        <div class="sumbtn">
          <a @click.prevent="toTrade" href="#" class="sum-btn">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {throttle, debounce} from 'lodash'

export default {
    name: 'index',
    computed: {
        ...mapState(
            'shopcart',
            ['shopcartList']
        ),
        totalCount() {
            let sum = 0;
            let count = 0;

            for (const cartItem of this.shopcartList) {
                if (cartItem.isChecked) {
                    sum += cartItem.totalPrice;
                    count++;
                }
            }

            return {sum, count};
        },
        isAllCheck() {
            return this.totalCount.count === this.shopcartList.length;
        }
    },
    methods: {
        ...mapActions(
            'shopcart',
            {
                getShopcartList: 'shopcartList',
                delCartItem: 'delCartItem'
            }
        ),
        checkAll() {
            if (this.isAllCheck) {
                for (const cartItem of this.shopcartList) {
                    if (cartItem.isChecked) {
                        cartItem.isChecked = 0;
                        this.updateCheck(cartItem);
                    }
                }
            } else {
                for (const cartItem of this.shopcartList) {
                    if (!cartItem.isChecked) {
                        cartItem.isChecked = 1;
                        this.updateCheck(cartItem);
                    }
                }
            }

        },
        updateShopcart: debounce(async function (skuId, skuNum) {
            try {
                await this.$store.dispatch('detail/reqAddToShopcart', {skuId, skuNum});

                await this.getShopcartList();
            } catch (err) {
                alert('修改商品数量失败')
            }
        }, 500),
        addCartNum(cartItem) {
            if (cartItem.skuNum + 1 > 9999) {
                return;
            }

            this.updateShopcart(cartItem.skuId, 1);
        },
        subCartNum(cartItem) {
            if (cartItem.skuNum - 1 < 1) {
                return;
            }

            this.updateShopcart(cartItem.skuId, -1);
        },
        async handleDelCartItem(cartItem) {
            if (confirm(`是否要删除${cartItem.skuName}`)) {
                try {
                    await this.delCartItem(cartItem.skuId);
                    await this.getShopcartList();
                } catch (err) {
                    alert('删除失败!');
                }
            }
        },
        async updateCheck(cartItem) {
            try {
                await this.$store.dispatch(
                    'shopcart/checkCartItem',
                    {
                        skuId: cartItem.skuId,
                        isChecked: cartItem.isChecked ? 1 : 0
                    }
                );
                await this.getShopcartList();
            } catch (err) {
                alert('修改商品状态失败');
            }
        },
        async delCheckedCartItems() {
            if (!confirm('确定要删除所选的商品吗')) {
                return;
            }

            try {
                await this.$store.dispatch('shopcart/delCheckedCartItems');
                await this.getShopcartList();
            } catch (err) {
                alert('删除失败');
            }

        },

        toTrade() {
            this.$router.push({
                name: 'trade'
            });
        }
    },
    mounted() {
        this.getShopcartList();
    }
}
</script>

<style lang="less" scoped>
* {
  box-sizing: content-box;
}

a:link:hover {
  text-decoration: none;
}

.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;

      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        display: flex;
        align-items: center;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 10%;

        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 34px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          .disabled {
            pointer-events: none;
            cursor: not-allowed;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    height: 52px;
    border: 1px solid #ddd;

    .select-all {
      padding: 0 10px;
      overflow: hidden;
      float: left;
      line-height: 50px;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 0 10px;
      line-height: 50px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 50px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 50px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 50px;
          line-height: 50px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
