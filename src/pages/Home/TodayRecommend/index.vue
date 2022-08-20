<template>
  <!--今日推荐recommend-->
  <div class="recommend w">
    <div class="recommend-hd">
      <img src="./images/clock.png" alt="">
      <span>今日推荐</span>
    </div>
    <div class="recommend-bd">
      <ul>
        <li>
          <img src="../../../../public/upload/today01.png" alt="">
        </li>
        <li>
          <img src="../../../../public/upload/today02.png" alt="">
        </li>
        <li>
          <img src="../../../../public/upload/today03.png" alt="">
        </li>
        <li>
          <img src="../../../../public/upload/today04.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="less">
/*版心*/
.w {
  width: 1200px;
  margin: 0 auto;
}

/*recommend*/
.recommend {
  height: 163px;
  margin-top: 12px;
  display: flex;

  .recommend-hd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 205px;
    height: 163px;
    background-color: #5c5251;

    span {
      font-size: 18px;
      margin-top: 10px;
      color: #ffffff;
    }
  }

  .recommend-bd {
    width: 995px;
    height: 163px;

    ul {
      display: flex;

      li {
        width: 248px;
        height: 163px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      li:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
