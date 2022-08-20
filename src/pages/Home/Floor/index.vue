<template>
  <!--楼层区域制作-->
  <div class="floor w">
    <div class="floor1">
      <div class="floor-hd">
        <h4>{{floor.name}}</h4>
        <ul class="tab-list">
          <li v-for="(navKey, index) in floor.navList"
              :key="navKey.id"
              :class="{'active': curNavIndex===index}"
              @click="getFloorItem(index)">
            {{navKey.text}}
          </li>
        </ul>
      </div>

      <div class="floor-bd">
        <!--<router-view></router-view>-->
        <FloorItem :floorItem="floorItem"/>
      </div>
    </div>
  </div>
</template>

<script>
import FloorItem from '@/pages/Home/Floor/FloorItem'
import {reqFloorItem} from "@/api";

export default {
    name: "index",
    components: {
        FloorItem,
    },
    data() {
        return {
            curNavIndex: 0,
            floorItem: {}
        }
    },
    props: ['floor'],
    methods: {
        async getFloorItem(index) {
            this.curNavIndex = index;
            let floorItemId = this.floor.navList[index].id;
            let res = await reqFloorItem(floorItemId);

            if (res.code === 200) {
                this.floorItem = res.data;
            }
        }
    },
    mounted() {
        this.getFloorItem(this.curNavIndex);
    }
}
</script>

<style scoped lang="less">
@mallRed: #b1191a;

/*版心*/
.w {
  width: 1200px;
  margin: 0 auto;
}

/*楼层区*/
.floor {
  > div {
    margin-top: 15px;

    .floor-hd {
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #c81623;

      h4 {
        font-size: 18px;
        color: #c81623;
        font-weight: bold;
      }

      ul {
        display: flex;
        align-items: center;

        li {
          padding: 0 10px;
          position: relative;

          &:hover {
            color: @mallRed;
            cursor: pointer;
          }

          &:after {
            content: '';
            width: 1px;
            height: 10px;
            display: block;
            background-color: #ccc;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }

          &:last-child:after {
            display: none;
          }
        }

        .active {
          color: @mallRed;
        }
      }
    }

    .floor-bd {
    }
  }
}
</style>
