//调用ajax请求接口, 获取数据
import {reqCategoryList} from "@/api";

const state = {
    categoryList: []
}

const mutations = {
    CATEGORY_LIST(state, categoryList) {
        //给state中的数据赋值
        state.categoryList = categoryList.slice(0, 15);
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
