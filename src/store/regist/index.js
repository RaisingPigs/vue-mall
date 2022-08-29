import {reqRegist, reqRegistCode} from "@/api";

const state = {
    code: ''
}

const mutations = {
    GET_REGIST_CODE(state, code) {
        state.code = code;
    }
}

const actions = {
    async getRegistCode({commit}, phone) {
        if (!phone) {
            return;
        }

        let res = await reqRegistCode(phone);

        if (res.code === 200) {
            commit('GET_REGIST_CODE', res.data);
        }
    },

    async regist({commit}, registParams) {
        let res = await reqRegist(registParams);

        if (res.code === 200) {
            return 'success';
        }

        return Promise.reject(new Error('failed'));
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
