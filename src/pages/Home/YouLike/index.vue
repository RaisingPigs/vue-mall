<template>
  <!--猜你喜欢-->
  <div class="like w">
    <div class="like-hd">
      <h4>猜你喜欢</h4>
      <a href="#">
        <span>换一批</span>
        <span class="iconfont icon-shuaxin"></span>
      </a>
    </div>
    <div class="like-bd">
      <ul>
        <li>
          <div class="like-img">
            <img src="./upload/like_01.png" alt="">
          </div>
          <div class="like-info">
            <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
            <p class="goods-price">¥116.00</p>
          </div>
        </li>
        <li>
          <div class="like-img">
            <img src="./upload/like_02.png" alt="">
          </div>
          <div class="like-info">
            <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
            <p class="goods-price">¥116.00</p>
          </div>
        </li>
        <li>
          <div class="like-img">
            <img src="./upload/like_03.png" alt="">
          </div>
          <div class="like-info">
            <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
            <p class="goods-price">¥116.00</p>
          </div>
        </li>
        <li>
          <div class="like-img">
            <img src="./upload/like_01.png" alt="">
          </div>
          <div class="like-info">
            <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
            <p class="goods-price">¥116.00</p>
          </div>
        </li>
        <li>
          <div class="like-img">
            <img src="./upload/like_02.png" alt="">
          </div>
          <div class="like-info">
            <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
            <p class="goods-price">¥116.00</p>
          </div>
        </li>
        <li>
          <div class="like-img">
            <img src="./upload/like_03.png" alt="">
          </div>
          <div class="like-info">
            <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
            <p class="goods-price">¥116.00</p>
          </div>
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

/*猜你喜欢 like*/
.like {
  height: 264px;
  margin-top: 15px;

  .like-hd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 27px;
    margin-bottom: 5px;

    h4 {
      font-size: 18px;
    }

    a {
      display: flex;
      align-items: center;
    }
  }

  .like-bd {
    border: 1px solid #f2f2f2;
    height: 230px;

    ul {
      display: flex;

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 230px;
        padding: 10px 0;

        &:hover {
          cursor: pointer;
        }

        .like-img {
          width: 142px;
          height: 142px;

          img {
            width: 100%;
            height: 100%;
            transition: .5s;

            &:hover {
              //width: 155px;
              //height: 155px;
              transform: scale(1.1);
            }
          }
        }

        .like-info {
          padding: 5px 30px;
          border-right: 1px solid #f2f2f2;

          .goods-price {
            color: #e04447;
            font-size: 18px;
            font-weight: bold;
          }
        }
      }

      li:last-child .like-info {
        border-right: none;
      }
    }
  }
}
</style>
