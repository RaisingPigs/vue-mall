<template>
  <!--bread-->
  <div class="bread">
    <ul class="fl sui-breadcrumb">
      <li>
        <a href="#">全部结果</a>
      </li>
    </ul>
    <ul class="fl sui-tag">
      <li v-if="searchParams.categoryName" class="with-x">
        {{searchParams.categoryName}}
        <i @click="removeBreadItem">×</i>
      </li>
      <li v-if="searchParams.trademark" class="with-x">
        {{searchParams.trademark.split(':')[1]}}
        <i @click="removeTrademark">×</i>
      </li>
      <li v-if="searchParams.keyword" class="with-x">
        {{searchParams.keyword}}
        <i @click="removeKeyword">×</i>
      </li>
      <li v-if="searchParams.props" v-for="(attr, index) in searchParams.props" class="with-x">
        {{attr.split(':')[1]}}
        <i @click="removeAttr(index)">×</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "index",
    props: ['searchParams'],
    methods: {
        removeBreadItem() {
            this.$router.push({
                name: 'search',
                params: this.$route.params
            });
        },

        removeKeyword() {
            this.$bus.$emit('clearKeyWord');
        },

        removeTrademark() {
            this.$bus.$emit('updateTrademark', undefined);
        },

        removeAttr(index) {
            this.$bus.$emit('removeAttr', index);
        }
    },
}
</script>

<style scoped lang="less">
.bread {
  margin-bottom: 5px;
  overflow: hidden;

  .sui-breadcrumb {
    padding: 3px 15px;
    margin: 0;
    font-weight: 400;
    border-radius: 3px;
    float: left;

    li {
      display: inline-block;
      line-height: 18px;

      a {
        color: #666;
        text-decoration: none;

        &:hover {
          color: #4cb9fc;
        }
      }
    }
  }

  .sui-tag {
    margin-top: -5px;
    list-style: none;
    font-size: 0;
    line-height: 0;
    padding: 5px 0 0;
    margin-bottom: 18px;
    float: left;

    .with-x {
      font-size: 12px;
      margin: 0 5px 5px 0;
      display: inline-block;
      overflow: hidden;
      color: #000;
      background: #f7f7f7;
      padding: 0 7px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #dedede;
      white-space: nowrap;
      transition: color 400ms;
      cursor: pointer;

      i {
        margin-left: 10px;
        cursor: pointer;
        font: 400 14px tahoma;
        display: inline-block;
        height: 100%;
        vertical-align: top;
      }

      &:hover {
        color: red;
      }
    }
  }
}
</style>
