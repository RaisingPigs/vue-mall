/*引入*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "@/router/routes";
import store from '@/store'
import {getToken} from "@/utils";

/*使用路由插件*/
Vue.use(VueRouter);

const router = new VueRouter({
    /*配置路由*/
    routes,
    /*配置路由的滚动行为*/
    scrollBehavior(to, from, savedPosition) {
        //return期望滚动到哪个的位置
        return {y: 0}; //y:0 就是每次路由跳转都滚动到顶部
    }
});

/*全局前置路由守卫: 初始化时调用, 每次路由切换之前被调用*/
/*to: 目标路由信息*/
/*from: 从哪个路由来的信息*/
/*next: 放行函数
*       next(): 放行
*       next('/login'): 指定跳转到哪个页面, 相当于 this.$router.push
*       next(false): 不放行路由, 此路不通原路返回, 可以用来避免用户单击浏览器回退按钮*/
router.beforeEach(async (to, from, next) => {
    const token = getToken();
    /*获取login的store的loginUser*/
    const loginUser = store.state.login.loginUser;

    if (token) {
        if (to.name === 'login') {
            /*如果用户已经登录, 那么就不能去登录页*/
            next('/');
        } else {
            if (loginUser.name) { /*如果用户信息已存在, 直接放行*/
                next();
            } else { /*如果用户信息不存在*/
                try {
                    /*获取用户信息, 获取loginUser后会保存在login的store中*/
                    await store.dispatch('login/getUserInfo');
                    /*获取成功则放行*/
                    next();
                } catch (err) {
                    /*获取不成功, 则清除token, 让其登录*/
                    await store.dispatch('login/logout');
                    alert('登录信息已过期, 请重新登录');
                    next('/login')
                }
            }
        }
    } else {
        /*如果没有登录, 还要去需要权限的路由, 则不能去*/
        if (to.meta.isAuth) {
            alert('请先登录');
            /*将想去但是需要登录后才能去的地址存到地址栏中, 登录后直接跳转到该地址*/
            next(`/login?redirectPath=${from.path}`);
        } else {
            next();
        }
    }
});

router.afterEach((to, from) => {
    document.title = to.meta.title;
})

export default router;
