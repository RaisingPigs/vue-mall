import {reqSearchList} from '@/api'

const state = {
    searchList: {}
}

const mutations = {
    SEARCH_LIST(state, searchList) {
        state.searchList = searchList;
    }
}

const actions = {
    async searchList({commit}, searchParams) {
        let res = await reqSearchList(searchParams);

        if (res.code === 200) {
            commit('SEARCH_LIST', res.data);
        }
    }
}

/*getters的出现是为了简化数据
* 此处searchList获取了很多数据, 所以将数据分开获取*/
const getters = {
    goodsList(state) {
        /*没有网络时, state.searchList.goodsList=undefined
        * 所以添加 || [] 当没网时返回空数组*/
        return state.searchList.goodsList || [];
    },
    attrList(state) {
        return state.searchList.attrsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    pageInfo({searchList}) {
        return {
            pageNo: searchList.pageNo || 1,
            pageSize: searchList.pageSize || 1,
            total: searchList.total || 0,
            totalPages: searchList.totalPages || 1
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
