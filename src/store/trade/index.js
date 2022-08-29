import {reqOrderSubmit, reqTradeInfo} from '@/api'

const state = {
    tradeInfo: {},
    orderId: ''
}

const mutations = {
    GET_TRADE_INFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo;
    },

    ORDER_SUBMIT(state, orderId) {
        state.orderId = orderId;
    }
}

const actions = {
    async getTradeInfo({commit}) {
        let res = await reqTradeInfo();

        if (res.code === 200) {
            commit('GET_TRADE_INFO', res.data)
            return 'success';
        }

        return Promise.reject(new Error('获取用户交易信息失败'));
    },

    async orderSubmit({commit}, submitInfo) {
        let res = await reqOrderSubmit(submitInfo.tradeNo, submitInfo.submitData);

        if (res.code === 200) {
            commit('ORDER_SUBMIT', res.data);
            return 'success';
        }

        return Promise.reject(new Error(res.message));
    }
}

const getters = {
    userAddressList({tradeInfo}) {
        return tradeInfo.userAddressList || [];
    },
    goodsDetailList({tradeInfo}) {
        return tradeInfo.detailArrayList || [];
    },
    orderInfo({tradeInfo}) {
        return {
            tradeNo: tradeInfo.tradeNo || '',
            totalNum: tradeInfo.totalNum || 0,
            totalAmount: tradeInfo.totalAmount || 0
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
