import {reqCheckCartItem, reqDelCartItem, reqShopcartList} from "@/api";

const state = {
    shopcartList: []
}

const mutations = {
    SHOPCART_LIST(state, shopcartList) {
        for (const cartItem of shopcartList) {
            cartItem.totalPrice = cartItem.skuNum * cartItem.cartPrice;
        }

        state.shopcartList = shopcartList;
    }
}

const actions = {
    async shopcartList({commit}) {
        let res = await reqShopcartList();

        if (res.code === 200) {
            commit('SHOPCART_LIST', res.data.length ? res.data[0].cartInfoList : []);
        }
    },

    async delCartItem({commit}, skuId) {
        let res = await reqDelCartItem(skuId);

        if (res.code === 200) {
            return 'success';
        }
        console.log('skui')
        return Promise.reject(new Error('failed'));
    },

    async checkCartItem({commit}, {skuId, isChecked}) {
        let res = await reqCheckCartItem(skuId, isChecked);

        if (res.code === 200) {
            return 'success';
        }

        return Promise.reject(new Error('failed'));
    },

    delCheckedCartItems({state, dispatch}) {
        let promiseList = [];

        for (const cartItem of state.shopcartList) {
            if (cartItem.isChecked) {
                let resPromise = dispatch('delCartItem', cartItem.skuId);
                promiseList.push(resPromise);
            }
        }
        /*将删除结果的promise通过 Promise.all()返回
       * Promise.all() 是只要有一个失败, 就返回失败, 全成功才算成功*/
        return Promise.all(promiseList);
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
