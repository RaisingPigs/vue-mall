import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import TypeNav from '@/components/TypeNav'
import Swiper from "@/components/Swiper";
import store from '@/store'

/*全局引入swiper的css*/
import 'swiper/css/swiper.min.css'

/*mockService.js不需要对外暴露, 只需要引入自动执行1次即可*/
import '@/mock/mockService'

/*全局组件注册, 参数1为全局组件的名字, 参数2是该组件
* 注意: TypeNav文件下的index.vue中, name应该起名为TypeNav*/
Vue.component(TypeNav.name, TypeNav);
Vue.component(Swiper.name, Swiper);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');

