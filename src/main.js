import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import TypeNav from '@/components/TypeNav'
import store from '@/store'

/*全局组件注册, 参数1为全局组件的名字, 参数2是该组件
* 注意: TypeNav文件下的index.vue中, name应该起名为TypeNav*/
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')

