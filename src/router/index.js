/*引入*/
import Vue from 'vue';
import VueRouter from 'vue-router';

/*使用路由插件*/
Vue.use(VueRouter);

import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Regist from '@/pages/Regist';

export default new VueRouter({
    /*配置路由*/
    routes: [
        {
            /*访问首页时, 重定向到home页*/
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {isAuth: false, title: '首页', footerShow: true}
        },
        {
            path: '/search/:searchKey?',
            name: 'search',
            component: Search,
            meta: {isAuth: false, title: '搜索', footerShow: true}
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {isAuth: false, title: '登录', footerShow: false}
        },
        {
            path: '/regist',
            name: 'regist',
            component: Regist,
            meta: {isAuth: false, title: '注册', footerShow: false}
        }
    ]
});
