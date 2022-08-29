import {reqLogin, reqLogout, reqUserInfo} from "@/api";
import {clearToken, setToken} from "@/utils";

const state = {
    loginUser: {},
    token: ''
}

const mutations = {
    LOGIN(state, token) {
        state.token = token;
        setToken(token);
    },
    GET_USER_INFO(state, loginUser) {
        state.loginUser = loginUser;
    },
    LOGOUT(state) {
        state.loginUser = {};
        state.token = ''
        clearToken();
    }
}

const actions = {
    async login({commit}, user) {
        let res = await reqLogin(user);

        if (res.code === 200) {
            commit('LOGIN', res.data.token);
            return 'success';
        }

        return Promise.reject(new Error('failed'));
    },
    async getUserInfo({commit}) {
        let res = await reqUserInfo();

        if (res.code === 200) {
            commit('GET_USER_INFO', res.data);
            return 'success';
        }

        return Promise.reject(new Error('failed'));
    },
    async logout({commit}) {
        let res = await reqLogout();

        if (res.code === 200) {
            commit('LOGOUT');
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
