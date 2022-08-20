<template>
  <div>
    <TypeNav/>
    <Main/>
    <TodayRecommend/>
    <YouLike/>
    <Floor v-for="floor in floorList"
           :key="floor.id"
           :floor="floor"/>
  </div>
</template>

<script>
import '@/assets/css/reset.css'
import Main from '@/pages/Home/Main';
import TodayRecommend from '@/pages/Home/TodayRecommend';
import YouLike from '@/pages/Home/YouLike';
import Floor from '@/pages/Home/Floor';

import {mapState, mapActions} from "vuex";

export default {
    name: "index",
    components: {
        Main,
        TodayRecommend,
        YouLike,
        Floor
    },
    computed: {
        ...mapState(
            'home',
            [
                'floorList'
            ]
        )
    },
    methods: {
        ...mapActions(
            'home',
            {
                getFloorList: 'floorList'
            }
        ),
    },
    mounted() {
        this.getFloorList();
    }
}
</script>

<style scoped>

</style>
