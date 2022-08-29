import {reqAddOrUpdateShopcart, reqAddShopcart, reqAddToShopcart, reqGoodsInfo} from "@/api";

const state = {
    goodsInfo: {}
}

const mutations = {
    GOODS_INFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo;
    },
}

const actions = {
    async goodsInfo({commit}, skuId) {
        let res = await reqGoodsInfo(skuId);
        if (res.code === 200) {
            commit('GOODS_INFO', res.data);
        }
    },

    async reqAddToShopcart({commit}, {skuId, skuNum}) {
        let res = await reqAddOrUpdateShopcart(skuId, skuNum);

        /*由于async修饰的函数一定会返回一个Promise对象, Promise对象要么成功, 要么失败
        * 所以直接return true或者false会将其包装为一个成功的Promise返回*/
        if (res.code === 200) {
            /*code==200返回一个非空字符串, 则会将其包装为一个成功的Promise返回*/
            return 'success';
        }

        /*code!=200返回一个失败的Promise对象*/
        return Promise.reject(new Error('failed'));
    }
}

const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {};
    },
    skuInfo({goodsInfo}) {
        return goodsInfo.skuInfo || {};
    },
    spuSaleAttrList({goodsInfo}) {
        return goodsInfo.spuSaleAttrList || [];
    },
    valuesSkuJson({goodsInfo}) {
        return goodsInfo.valuesSkuJson;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
