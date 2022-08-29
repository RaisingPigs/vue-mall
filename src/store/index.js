import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import home from '@/store/home'
import search from '@/store/search'
import detail from '@/store/detail'
import shopcart from '@/store/shopcart'
import regist from '@/store/regist'
import login from '@/store/login'
import trade from '@/store/trade'
import pay from '@/store/pay'
import center from '@/store/center'

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
        regist,
        login,
        trade,
        pay,
        center
    }
});
