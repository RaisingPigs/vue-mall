<template>
  <!-- 右侧选择区域布局 -->
  <div class="InfoWrap">
    <div class="goodsDetail">
      <h3 class="InfoName">{{skuInfo.skuName}}</h3>
      <p class="news">{{skuInfo.skuDesc}}</p>
      <div class="priceArea">
        <div class="priceArea1">
          <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
          <div class="price">
            <i>¥</i>
            <em>{{skuInfo.price}}</em>
            <span>降价通知</span>
          </div>
          <div class="remark">
            <i>累计评价</i>
            <em>65545</em>
          </div>
        </div>
        <div class="priceArea2">
          <div class="title">
            <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</i>
          </div>
          <div class="fixWidth">
            <i class="red-bg">加价购</i>
            <em class="t-gray">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em>
          </div>
        </div>
      </div>
      <div class="support">
        <div class="supportArea">
          <div class="title">支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</div>
          <div class="fixWidth">以旧换新，闲置手机回收 4G套餐超值抢 礼品购</div>
        </div>
        <div class="supportArea">
          <div class="title">配 送 至</div>
          <div class="fixWidth">广东省 深圳市 宝安区</div>
        </div>
      </div>
    </div>

    <div class="choose">
      <div class="chooseArea">
        <div class="choosed"></div>
        <dl v-for="(saleAttr, index, oldIndex) in spuSaleAttrList"
            :key="saleAttr.id">
          <dt class="title">{{saleAttr.saleAttrName}}</dt>
          <dd @click="saleAttrCheck(saleAttr,index)"
              v-for="(saleAttrVal, index) in saleAttr.spuSaleAttrValueList"
              :key="saleAttrVal.id"
              changepirce="0"
              :class="{'active': parseInt(saleAttrVal.isChecked)}">
            {{saleAttrVal.saleAttrValueName}}
          </dd>
        </dl>
      </div>
      <div class="cartWrap">
        <div class="controls">
          <input v-model.number="goodsNum" autocomplete="off" class="itxt">
          <a @click.prevent="goodsNum++"
             :class="{'disabled':goodsNum>=9999}"
             class="plus">+</a>
          <a @click.prevent="goodsNum--"
             :class="{'disabled':goodsNum<=1}"
             class="mins">-</a>
        </div>
        <div class="add">
          <a @click="addToShopcart" href="javascript:">加入购物车</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqAddOrUpdateShopcart} from "@/api";

export default {
    name: "index",
    data() {
        return {
            goodsNum: 1
        }
    },
    props: ['skuInfo', 'spuSaleAttrList'],
    watch: {
        goodsNum(newValue, oldValue) {
            if (newValue < 1) {
                this.goodsNum = 1;
            }
            if (newValue > 9999) {
                this.goodsNum = 9999;
            }
            this.goodsNum = parseInt(this.goodsNum);
        }
    },
    methods: {
        saleAttrCheck(saleAttr, index) {
            if (saleAttr.spuSaleAttrValueList[index].isChecked == 1) {
                return;
            }

            for (const saleAttrValue of saleAttr.spuSaleAttrValueList) {
                if (saleAttrValue.isChecked == 1) {
                    saleAttrValue.isChecked = '0';
                }
            }
            saleAttr.spuSaleAttrValueList[index].isChecked = '1';
        },
        async addToShopcart() {
            try {
                await this.$store.dispatch('detail/reqAddToShopcart',
                    {skuId: this.skuInfo.id, skuNum: this.goodsNum});
                alert('加入购物车成功');
            } catch (err) {
                console.log(err);
                alert('加入购物车失败');
            }
        }
    },
}
</script>

<style scoped lang="less">

.InfoWrap {
  width: 700px;
  float: right;

  .InfoName {
    font-size: 14px;
    line-height: 21px;
    margin-top: 15px;
  }

  .news {
    color: #e12228;
    margin-top: 15px;
  }

  .priceArea {
    background: #fee9eb;
    padding: 7px;
    margin: 13px 0;

    .priceArea1 {
      overflow: hidden;
      line-height: 28px;
      margin-top: 10px;

      .title {
        float: left;
        margin-right: 15px;
      }

      .price {
        float: left;
        color: #c81623;

        i {
          font-size: 16px;
        }

        em {
          font-size: 24px;
          font-weight: 700;
        }

        span {
          font-size: 12px;
        }
      }

      .remark {
        float: right;
      }
    }

    .priceArea2 {
      overflow: hidden;
      line-height: 28px;
      margin-top: 10px;

      .title {
        margin-right: 15px;
        float: left;
      }

      .fixWidth {
        width: 520px;
        float: left;

        .red-bg {
          background: #c81623;
          color: #fff;
          padding: 3px;
        }

        .t-gray {
          color: #999;
        }
      }
    }


  }

  .support {
    border-bottom: 1px solid #ededed;
    padding-bottom: 5px;

    .supportArea {
      overflow: hidden;
      line-height: 28px;
      margin-top: 10px;

      .title {
        margin-right: 15px;
        float: left;
      }

      .fixWidth {
        width: 520px;
        float: left;
        color: #999;
      }
    }
  }

  .choose {
    .chooseArea {
      overflow: hidden;
      line-height: 28px;
      margin-top: 10px;

      dl {
        overflow: hidden;
        margin: 13px 0;

        dt {
          margin-right: 15px;
          float: left;
        }

        dd {
          float: left;
          margin-right: 5px;
          color: #666;
          line-height: 24px;
          padding: 2px 14px;
          border-top: 1px solid #eee;
          border-right: 1px solid #bbb;
          border-bottom: 1px solid #bbb;
          border-left: 1px solid #eee;

          &.active {
            color: green;
            border: 1px solid green;
          }
        }
      }
    }

    .cartWrap {
      .controls {
        width: 48px;
        position: relative;
        float: left;
        margin-right: 15px;

        .itxt {
          width: 38px;
          height: 37px;
          border: 1px solid #ddd;
          color: #555;
          float: left;
          border-right: 0;
          text-align: center;
        }

        .plus,
        .mins {
          width: 15px;
          text-align: center;
          height: 17px;
          line-height: 17px;
          background: #f1f1f1;
          color: #666;
          position: absolute;
          right: -8px;
          border: 1px solid #ccc;
          cursor: pointer;
        }

        .mins {
          right: -8px;
          top: 19px;
          border-top: 0;
        }

        .plus {
          right: -8px;
        }

        .disabled {
          pointer-events: none;
          cursor: none;
        }
      }

      .add {
        float: left;

        a {
          background-color: #e1251b;
          padding: 0 25px;
          font-size: 16px;
          color: #fff;
          height: 36px;
          line-height: 36px;
          display: block;
        }
      }
    }
  }
}
</style>
