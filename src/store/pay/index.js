import {reqOrderPayStatus, reqPayInfo} from "@/api";

const state = {
    payInfo: {},
}

const mutations = {
    GET_PAY_INFO(state, payInfo) {
        state.payInfo = payInfo;
    }
}

const actions = {
    async getPayInfo({commit}, orderId) {
        let res = await reqPayInfo(orderId);

        if (res.code === 200) {
            commit('GET_PAY_INFO', res.data);
            return 'success';
        }

        return Promise.reject(new Error('获取订单信息失败'));
    },
    async getOrderPayStatus({commit}, orderId) {
        let res = await reqOrderPayStatus(orderId);
        if (res.code === 200 || res.code === 205) {
            return res.code;
        }

        return Promise.reject(new Error('支付状态查询失败'));
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
