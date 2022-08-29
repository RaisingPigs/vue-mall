<template>
  <div>
    <TypeNav/>
    <!--list-content-->
    <div class="main">
      <div class="py-container">
        <Bread v-if="searchParams.categoryName ||  searchParams.keyword || searchParams.trademark || searchParams.props"
               :searchParams="searchParams"/>

        <!--选择区-->
        <Selector :attrList="attrList"
                  :trademarkList="trademarkList"/>

        <GoodsDetail :goodsList="goodsList"
                     :searchParams="searchParams"/>

        <Pagination @currentChange="handlePageChange"
                    :current-page="pageInfo.pageNo"
                    :page-size="pageInfo.pageSize"
                    :pager-count="5"
                    :total="pageInfo.total"/>
      </div>
    </div>
  </div>
</template>

<script>
import Bread from '@/pages/Search/Bread';
import Selector from '@/pages/Search/Selector';
import GoodsDetail from '@/pages/Search/GoodsDetail';
import {mapActions, mapGetters} from "vuex";

export default {
    name: "index",
    components: {
        Bread,
        Selector,
        GoodsDetail
    },
    data() {
        return {
            searchParams: {
                category1Id: undefined,
                category2Id: undefined,
                category3Id: undefined,
                categoryName: undefined,
                keyword: undefined,
                order: '1:desc',
                pageNo: 1,
                pageSize: 10,
                props: undefined,
                trademark: undefined
            }
        }
    },
    computed: {
        ...mapGetters(
            'search',
            ['goodsList', 'attrList', 'trademarkList', 'pageInfo']
        )
    },
    watch: {
        $route: {
            immediate: true,
            handler() {
                this.searchParams.category1Id = undefined;
                this.searchParams.category2Id = undefined;
                this.searchParams.category3Id = undefined;
                this.searchParams.categoryName = undefined;
                this.searchParams.keyword = undefined;
                Object.assign(this.searchParams, this.$route.query, this.$route.params);

                this.getSearchList(this.searchParams);
            }
        }
    },
    methods: {
        ...mapActions(
            'search',
            {
                getSearchList: 'searchList'
            }
        ),
        updateTrademark(trademark) {
            if (trademark) {
                this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`;
            } else {
                this.searchParams.trademark = trademark;
            }

            this.getSearchList(this.searchParams);
        },

        addAttr(attrParam) {
            if (!this.searchParams.props) {
                this.searchParams.props = [];
            }

            if (!this.searchParams.props.includes(attrParam)) {
                this.searchParams.props.push(attrParam);
                this.getSearchList(this.searchParams);
            }
        },

        removeAttr(index) {
            // this.searchParams.props.splice(this.searchParams.props.indexOf(attr), 1);
            this.searchParams.props.splice(index, 1);
            if (this.searchParams.props.length <= 0) {
                this.searchParams.props = undefined;
            }
            this.getSearchList(this.searchParams);
        },

        updateOrder(order) {
            this.searchParams.order = order;

            this.getSearchList(this.searchParams);
        },

        handlePageChange(pagenum) {
            this.searchParams.pageNo = pagenum;
            this.getSearchList(this.searchParams);
        }
    },
    mounted() {
        this.$bus.$on('updateTrademark', this.updateTrademark);
        this.$bus.$on('addAttr', this.addAttr);
        this.$bus.$on('removeAttr', this.removeAttr);
        this.$bus.$on('updateOrder', this.updateOrder);
    },
    beforeDestroy() {
        this.$bus.$off('updateTrademark');
        this.$bus.$off('addAttr');
        this.$bus.$off('removeAttr');
        this.$bus.$off('updateOrder');
    }
}
</script>

<style scoped lang="less">
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
