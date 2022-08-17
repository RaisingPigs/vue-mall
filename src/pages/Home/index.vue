<template>
  <div>
    <TypeNav/>
    <Main/>
    <TodayRecommend/>
    <YouLike/>
    <Floor/>
  </div>
</template>

<script>
import Main from '@/pages/Home/Main';
import TodayRecommend from '@/pages/Home/TodayRecommend';
import YouLike from '@/pages/Home/YouLike';
import Floor from '@/pages/Home/Floor';

export default {
  name: "index",
  components: {
    Main,
    TodayRecommend,
    YouLike,
    Floor
  },
}
</script>

<style scoped>

</style>
