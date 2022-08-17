<template>
  <div>
    <Shortcut/>
    <Header/>
    <!--配置了路由规则后, 此根据路由路径, 此处显示路由组件-->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Shortcut from '@/components/Shortcut'

export default {
  name: 'App',
  components: {
    Shortcut,
    Header,
    Footer
  }
}
</script>

<style>

</style>
