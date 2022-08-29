export default [
    {
        /*访问首页时, 重定向到home页*/
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/Home'),
        meta: {isAuth: false, title: '首页', footerShow: true}
    },
    {
        path: '/search/:keyword?',
        name: 'search',
        component: () => import('@/pages/Search'),
        meta: {isAuth: false, title: '搜索', footerShow: true}
    },
    {
        path: '/detail/:skuId',
        name: 'detail',
        component: () => import("@/pages/Detail"),
        meta: {isAuth: false, title: '商品详情', footerShow: true}
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login'),
        meta: {isAuth: false, title: '登录', footerShow: false}
    },
    {
        path: '/regist',
        name: 'regist',
        component: () => import('@/pages/Regist'),
        meta: {isAuth: false, title: '注册', footerShow: false}
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: () => import('@/pages/Shopcart'),
        meta: {isAuth: false, title: '购物车', footerShow: false}
    },
    {
        name: 'trade',
        path: '/trade',
        component: () => import('@/pages/Trade'),
        meta: {isAuth: true, title: '生成订单', footerShow: false},
        beforeEnter: (to, from, next) => {
            if (from.path === '/shopcart') {
                next();
            } else {
                alert('无法直接访问');
                /*从哪儿来, 回哪儿去*/
                next(false);
            }
        }
    },
    {
        name: 'pay',
        path: '/pay/:orderId',
        component: () => import('@/pages/Pay'),
        meta: {isAuth: true, title: '支付', footerShow: false},
        beforeEnter: (to, from, next) => {
            if (from.name === 'trade') {
                next();
            } else {
                alert('无法直接访问');
                /*从哪儿来, 回哪儿去*/
                next(false);
            }
        }
    },
    {
        name: 'pay-success',
        path: '/pay-success',
        component: () => import('@/pages/PaySuccess'),
        meta: {isAuth: true, title: '支付成功', footerShow: false},
        beforeEnter: (to, from, next) => {
            /*因为支付页的路径为 /pay/订单号 , 所以直接 === 判断是有问题的
            * 使用 str.includes() 或 str.startsWith()来判断*/
            // if (from.path.includes('/pay')) {
            if (from.path.startsWith('/pay')) {
                next();
            } else {
                alert('无法直接访问');
                /*从哪儿来, 回哪儿去*/
                next(false);
            }
        }
    },
    {
        name: 'center',
        path: '/center',
        component: () => import('@/pages/Center'),
        meta: {isAuth: true, title: '个人中心', footerShow: false},
        children: [
            {
                path: '/center',
                redirect: 'my-order'
            },
            {
                name: 'my-order',
                /*二级路由不写斜杠*/
                path: 'my-order',
                component: () => import('@/pages/Center/MyOrder'),
                meta: {isAuth: true, title: '我的订单'},
            },
            {
                name: 'group-order',
                /*二级路由不写斜杠*/
                path: 'group-order',
                component: () => import('@/pages/Center/GroupOrder'),
                meta: {isAuth: true, title: '团队订单'},
            },
        ]
    }
]
