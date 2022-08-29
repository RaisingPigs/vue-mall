<template>
  <div v-if="totalPage > 0" class="page">
    <div class="sui-pagination">
      <ul>
<!--        <li :class="{disabled: isFirst}"
            class="prev">
          <a @click.prevent="currentChange(1)">首页</a>
        </li>-->
        <li :class="{disabled: isFirst}"
            class="prev">
          <a @click.prevent="currentChange(currentPage - 1);">«上一页</a>
        </li>
        <li v-show="!isFront">
          <a @click.prevent="currentChange(1)">1</a>
        </li>
        <li v-show="!isFront" class="dotted">
          <a href="javascript:void(0);">...</a>
        </li>
        <li v-for="pagenum in pagenumList"
            :class="{active: pagenum == currentPage}">
          <a @click.prevent="currentChange(pagenum)">{{pagenum}}</a>
        </li>
        <li v-show="this.totalPage > this.pagerCount && !isBehind" class="dotted">
          <a href="javascript:void(0);">...</a>
        </li>
        <li v-show="this.totalPage > this.pagerCount && !isBehind">
          <a @click.prevent="currentChange(totalPage)">{{totalPage}}</a>
        </li>
        <li :class="{disabled: isLast}"
            class="next">
          <a @click.prevent="currentChange(currentPage + 1);">下一页»</a>
        </li>
<!--        <li :class="{disabled: isLast}"
            class="prev">
          <a @click.prevent="currentChange(totalPage)">尾页</a>
        </li>-->
      </ul>
      <div class="total">
        <span>共{{totalPage}}页</span>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/reset.css'

export default {
    name: "Pagination",
    props: ['currentPage', 'pageSize', 'total', 'pagerCount'],
    computed: {
        totalPage() {
            return Math.ceil(this.total / this.pageSize);
        },
        /*判断当前页是否为首页*/
        isFirst() {
            return this.currentPage <= 1;
        },
        /*判断当前页是否为尾页*/
        isLast() {
            return this.currentPage >= this.totalPage;
        },
        /*判断当前页是否为前3页*/
        isFront() {
            return this.currentPage <= Math.ceil(this.pagerCount / 2);
        },
        /*判断当前页是否为后3页*/
        isBehind() {
            return this.currentPage >= this.totalPage - this.pagerCount / 2;
        },
        pagenumList() {
            /*存储开始页数字和结束页数字*/
            let start = 0;
            let end = 0;
            /*总页码小于等于5*/
            if (this.totalPage <= this.pagerCount) {
                start = 1;
                end = this.totalPage;
            } else { /*总页码大于5*/
                /*当前页为前3页*/
                if (this.isFront) {
                    start = 1;
                    end = this.pagerCount;
                }else if (this.isBehind) { /*当前页为后三页*/
                    start = this.totalPage - this.pagerCount + 1;
                    end = this.totalPage;
                } else { /*当前页为中间页*/
                    start = this.currentPage - Math.floor(this.pagerCount / 2);
                    end = this.currentPage + Math.floor(this.pagerCount / 2);
                }
            }

            let pageArr = [];
            for (let i = start; i <= end; i++) {
                pageArr.push(i);
            }
            return pageArr;
        }
    },
    methods: {
        currentChange(pagenum) {
            this.$emit('currentChange', pagenum);
        }
    },
}
</script>

<style scoped lang="less">
.page {
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;

  .sui-pagination {
    display: flex;
    align-items: center;

    ul {
      display: flex;

      li {
        border: 1px solid #ccc;
        margin: 0 5px;

        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          padding: 10px 15px;
          color: #666;
          text-decoration: none;
        }
      }

      li:hover {
        border-color: red;
        cursor: pointer;

        a {
          color: red;
        }
      }

      .active {
        background-color: red;
        border-color: red;
        pointer-events: none;

        a {
          color: #ffffff;
        }

        &:hover a {
          cursor: default;
          color: #ffffff;
        }
      }

      .disabled {
        border-color: #ccc;

        a {
          color: #ccc;
        }

        &:hover {
          border-color: #ccc;
          cursor: not-allowed;

          a {
            color: #ccc;
            pointer-events: none
          }
        }
      }
    }

    .total {
      margin-left: 15px;
    }
  }
}
</style>
