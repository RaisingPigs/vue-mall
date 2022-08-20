//调用ajax请求接口, 获取数据
import {reqCategoryList, reqBannerList, reqFloorList, reqFloorItem} from "@/api";

const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
    floorItem: []
}

const mutations = {
    CATEGORY_LIST(state, categoryList) {
        //给state中的数据赋值
        state.categoryList = categoryList.slice(0, 15);
    },
    BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOOR_LIST(state, floorList) {
        state.floorList = floorList;
    },
    FLOOR_ITEM(state, floorItem) {
        state.floorItem = floorItem;
    }
}

const actions = {
    async categoryList({commit}) {
        //调用ajax请求接口, 获取数据
        let res = await reqCategoryList();
        if (res.code === 200) {
            //commit调用mutations的方法, 并传入参数
            commit('CATEGORY_LIST', res.data);
        }
    },

    async bannerList({commit}) {
        let res = await reqBannerList();
        if (res.code === 200) {
            commit('BANNER_LIST', res.data);
        }
    },

    async floorList({commit}) {
        let res = await reqFloorList();
        if (res.code === 200) {
            commit('FLOOR_LIST', res.data);
        }
    },

    async floorItem({commit}, floorItemId) {
        let res = await reqFloorItem(floorItemId);

        if (res.code === 200) {
            commit('FLOOR_ITEM', res.data);
        }
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
