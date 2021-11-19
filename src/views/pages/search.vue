<template>
<div class="search">
  <van-sticky>
    <form action="/">
      <van-search v-model="keyWords" shape="round" background="#4fc08d" show-action placeholder="请输入搜索关键词" @search="onSearch(keyWords)" @cancel="onCancel" />
    </form>
  </van-sticky>
  <div class="banner">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="item in banner" :key="item">
        <img :src="item.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
  <van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
  <van-grid :border="false" :column-num="5">
    <template v-for="item in guide" :key="item">
      <van-grid-item :icon="item.img" :text="item.label" />
    </template>
  </van-grid>
  <div class="img-list">
    <img v-for="img in imageList" v-lazy="img" :key="img" @click="viewImg(imageList)" />
  </div>
</div>
</template>

<script>
import {
  ref
} from 'vue'
import {
  Toast,
  ImagePreview
} from 'vant'
export default {
  setup() {
    const keyWords = ref("");
    const onSearch = (val) => Toast(val);
    const onCancel = () => Toast('取消');
    const banner = [{
        img: require("../../assets/banner/t0121249aadbc87614d.jpg")
      },
      {
        img: require("../../assets/banner/t013098a91fd9193a3c.jpg")
      },
      {
        img: require("../../assets/banner/t0194e4757bdc6f4f59.jpg")
      },
      {
        img: require("../../assets/banner/t0198c41bad7f0e2cde.jpg")
      }
    ];
    const guide = [{
        label: '秒杀活动',
        img: require("../../assets/guide/1.png"),
      },
      {
        label: '每日拼团',
        img: require("../../assets/guide/2.png"),
      },
      {
        label: '领券中心',
        img: require("../../assets/guide/3.png"),
      },
      {
        label: '积分商城',
        img: require("../../assets/guide/4.jpeg"),
      },
      {
        label: '每日签到',
        img: require("../../assets/guide/5.png"),
      },
      {
        label: '生活家电',
        img: require("../../assets/guide/6.png"),
      },
      {
        label: '手机数码',
        img: require("../../assets/guide/7.png"),
      },
      {
        label: '砍价活动',
        img: require("../../assets/guide/8.png"),
      },
      {
        label: '直播活动',
        img: require("../../assets/guide/9.png"),
      },
      {
        label: '个人中心',
        img: require("../../assets/guide/10.jpeg"),
      },
    ]
    const imageList = [
      "https://img.yzcdn.cn/vant/apple-1.jpg",
      "https://img.yzcdn.cn/vant/apple-2.jpg"
    ]
    const viewImg = (item) => {
      ImagePreview({
        images: item,
        closeable: true
      })
    }
    return {
      keyWords,
      onSearch,
      onCancel,
      banner,
      guide,
      imageList,
      viewImg,
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden auto;
  .banner {
    padding: 8px;

    .van-swipe {
      border-radius: 4px;
      height: 150px;

      .van-swipe-item {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .img-list {
    padding: 10px;
    background: #f7f8fa;

    img {
      width: 100%;
      height: 250px;
      margin-bottom: 10px;
    }
  }
}

.search::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}
</style>
