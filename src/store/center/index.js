import {reqOrderList} from "@/api";

const state = {
    orderListInfo:{}
}

const mutations = {
    GET_ORDER_LIST(state, orderListInfo) {
        state.orderListInfo = orderListInfo;
    }
}

const actions = {
    async getOrderList({commit}, {page, limit}) {
        let res = await reqOrderList(page, limit);

        if (res.code === 200) {
            commit('GET_ORDER_LIST', res.data);
        }
    }
}

const getters = {
    orderList({orderListInfo}) {
        return orderListInfo.records || [];
    },
    pageInfo({orderListInfo}) {
        return {
            pagenum: orderListInfo.current,
            total: orderListInfo.total,
            pageCount: orderListInfo.pages,
            pagesize: orderListInfo.size
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
