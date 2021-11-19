<template>
<div class="classify">
  <div class="search">
    <div class="title">商品分类</div>
    <form action="/">
      <van-search v-model="keyWords" shape="round" placeholder="请输入搜索关键词" @search="onSearch" />
    </form>
  </div>
  <div class="content">
    <div class="aside-left">
      <van-sidebar v-model="active" @change="changeItem">
        <van-sidebar-item title="服装" />
        <van-sidebar-item title="化妆品" />
        <van-sidebar-item title="名牌包包" />
      </van-sidebar>
    </div>
    <div class="aside-right">
      <div class="aside-content">
        <div class="aside-banner">
          <img :src="info.banner" alt="" srcset="">
        </div>
        <div class="aside-list" v-for="item in info.menuList" :key="item">
          <div class="list-title">{{item.label}}</div>
          <div class="list-content">
            <div class="content-item" v-for="child in item.list" :key="child">
              <img :src="child.img" alt="" srcset="">
              <div>{{child.label}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  ref,
  reactive
} from 'vue'
import {
  Toast
} from 'vant';
export default {
  setup() {
    const keyWords = ref('');
    const onSearch = (val) => Toast(val);
    const active = ref(0);
    let info = reactive({
      banner: require('../../assets/goods/banner1/banner1.png'),
      menuList: [{
          label: '女装',
          list: [{
              label: 'T恤',
              img: require('../../assets/goods/banner1/1.png')
            },
            {
              label: '寸衫',
              img: require('../../assets/goods/banner1/2.png')
            },
            {
              label: '雪纺衫',
              img: require('../../assets/goods/banner1/3.png')
            },
            {
              label: '卫衣',
              img: require('../../assets/goods/banner1/4.png')
            },
            {
              label: '马甲',
              img: require('../../assets/goods/banner1/5.png')
            },
            {
              label: '连衣裙',
              img: require('../../assets/goods/banner1/6.png')
            },
            {
              label: '半身裙',
              img: require('../../assets/goods/banner1/7.png')
            },
            {
              label: '牛仔裤',
              img: require('../../assets/goods/banner1/8.png')
            },
            {
              label: '休闲裤',
              img: require('../../assets/goods/banner1/9.png')
            },
            {
              label: '风衣',
              img: require('../../assets/goods/banner1/10.png')
            },
            {
              label: '大码装',
              img: require('../../assets/goods/banner1/11.png')
            },
            {
              label: '婚纱礼服',
              img: require('../../assets/goods/banner1/12.png')
            },
          ]
        },
        {
          label: '内衣',
          list: [{
              label: '文胸',
              img: require('../../assets/goods/banner1/13.png')
            },
            {
              label: '女式内裤',
              img: require('../../assets/goods/banner1/14.png')
            },
            {
              label: '男士内裤',
              img: require('../../assets/goods/banner1/15.png')
            },
            {
              label: '居家',
              img: require('../../assets/goods/banner1/16.png')
            },
            {
              label: '睡衣',
              img: require('../../assets/goods/banner1/17.png')
            },
            {
              label: '塑身衣',
              img: require('../../assets/goods/banner1/18.png')
            },
            {
              label: '睡袍/浴袍',
              img: require('../../assets/goods/banner1/19.png')
            },
            {
              label: '泳衣',
              img: require('../../assets/goods/banner1/20.png')
            },
            {
              label: '背心',
              img: require('../../assets/goods/banner1/21.png')
            },
            {
              label: '抹胸',
              img: require('../../assets/goods/banner1/22.png')
            },
            {
              label: '连裤袜',
              img: require('../../assets/goods/banner1/23.png')
            },
            {
              label: '美腿袜',
              img: require('../../assets/goods/banner1/24.png')
            },
            {
              label: '情趣内衣',
              img: require('../../assets/goods/banner1/25.png')
            },
          ]
        },
        {
          label: '运动',
          list: [{
              label: '帆布鞋',
              img: require('../../assets/goods/banner1/26.png')
            },
            {
              label: '训练鞋',
              img: require('../../assets/goods/banner1/27.png')
            },
            {
              label: '拖鞋',
              img: require('../../assets/goods/banner1/28.png')
            },
          ]
        },
        {
          label: '女鞋',
          list: [{
              label: '高跟鞋',
              img: require('../../assets/goods/banner1/29.png')
            },
            {
              label: '休闲鞋',
              img: require('../../assets/goods/banner1/30.png')
            },
            {
              label: '凉鞋',
              img: require('../../assets/goods/banner1/31.png')
            },
            {
              label: '拖鞋',
              img: require('../../assets/goods/banner1/32.png')
            },
            {
              label: '帆布鞋',
              img: require('../../assets/goods/banner1/33.png')
            },
            {
              label: '雨鞋/雨靴',
              img: require('../../assets/goods/banner1/34.png')
            },
          ]
        },
        {
          label: '童装',
          list: [{
              label: '裙子',
              img: require('../../assets/goods/banner1/35.png')
            },
            {
              label: '礼服/演出服',
              img: require('../../assets/goods/banner1/36.png')
            },
            {
              label: '亲子装',
              img: require('../../assets/goods/banner1/37.png')
            },
          ]
        }
      ]
    })

    function changeItem(index) {
      if (index == 0) {
        info.banner = require('../../assets/goods/banner1/banner1.png')
        info.menuList = [{
            label: '女装',
            list: [{
                label: 'T恤',
                img: require('../../assets/goods/banner1/1.png')
              },
              {
                label: '寸衫',
                img: require('../../assets/goods/banner1/2.png')
              },
              {
                label: '雪纺衫',
                img: require('../../assets/goods/banner1/3.png')
              },
              {
                label: '卫衣',
                img: require('../../assets/goods/banner1/4.png')
              },
              {
                label: '马甲',
                img: require('../../assets/goods/banner1/5.png')
              },
              {
                label: '连衣裙',
                img: require('../../assets/goods/banner1/6.png')
              },
              {
                label: '半身裙',
                img: require('../../assets/goods/banner1/7.png')
              },
              {
                label: '牛仔裤',
                img: require('../../assets/goods/banner1/8.png')
              },
              {
                label: '休闲裤',
                img: require('../../assets/goods/banner1/9.png')
              },
              {
                label: '风衣',
                img: require('../../assets/goods/banner1/10.png')
              },
              {
                label: '大码装',
                img: require('../../assets/goods/banner1/11.png')
              },
              {
                label: '婚纱礼服',
                img: require('../../assets/goods/banner1/12.png')
              },
            ]
          },
          {
            label: '内衣',
            list: [{
                label: '文胸',
                img: require('../../assets/goods/banner1/13.png')
              },
              {
                label: '女式内裤',
                img: require('../../assets/goods/banner1/14.png')
              },
              {
                label: '男士内裤',
                img: require('../../assets/goods/banner1/15.png')
              },
              {
                label: '居家',
                img: require('../../assets/goods/banner1/16.png')
              },
              {
                label: '睡衣',
                img: require('../../assets/goods/banner1/17.png')
              },
              {
                label: '塑身衣',
                img: require('../../assets/goods/banner1/18.png')
              },
              {
                label: '睡袍/浴袍',
                img: require('../../assets/goods/banner1/19.png')
              },
              {
                label: '泳衣',
                img: require('../../assets/goods/banner1/20.png')
              },
              {
                label: '背心',
                img: require('../../assets/goods/banner1/21.png')
              },
              {
                label: '抹胸',
                img: require('../../assets/goods/banner1/22.png')
              },
              {
                label: '连裤袜',
                img: require('../../assets/goods/banner1/23.png')
              },
              {
                label: '美腿袜',
                img: require('../../assets/goods/banner1/24.png')
              },
              {
                label: '情趣内衣',
                img: require('../../assets/goods/banner1/25.png')
              },
            ]
          },
          {
            label: '运动',
            list: [{
                label: '帆布鞋',
                img: require('../../assets/goods/banner1/26.png')
              },
              {
                label: '训练鞋',
                img: require('../../assets/goods/banner1/27.png')
              },
              {
                label: '拖鞋',
                img: require('../../assets/goods/banner1/28.png')
              },
            ]
          },
          {
            label: '女鞋',
            list: [{
                label: '高跟鞋',
                img: require('../../assets/goods/banner1/29.png')
              },
              {
                label: '休闲鞋',
                img: require('../../assets/goods/banner1/30.png')
              },
              {
                label: '凉鞋',
                img: require('../../assets/goods/banner1/31.png')
              },
              {
                label: '拖鞋',
                img: require('../../assets/goods/banner1/32.png')
              },
              {
                label: '帆布鞋',
                img: require('../../assets/goods/banner1/33.png')
              },
              {
                label: '雨鞋/雨靴',
                img: require('../../assets/goods/banner1/34.png')
              },
            ]
          },
          {
            label: '童装',
            list: [{
                label: '裙子',
                img: require('../../assets/goods/banner1/35.png')
              },
              {
                label: '礼服/演出服',
                img: require('../../assets/goods/banner1/36.png')
              },
              {
                label: '亲子装',
                img: require('../../assets/goods/banner1/37.png')
              },
            ]
          }
        ]
      } else if (index == 1) {
        info.banner = require('../../assets/goods/banner2/banner2.jpeg')
        info.menuList = [{
          label: '面部护理',
          list: [{
              label: '洁面乳',
              img: require('../../assets/goods/banner2/1.png')
            },
            {
              label: '爽肤水',
              img: require('../../assets/goods/banner2/2.png')
            },
            {
              label: '精华露',
              img: require('../../assets/goods/banner2/3.png')
            },
            {
              label: '乳液面霜',
              img: require('../../assets/goods/banner2/4.png')
            },
            {
              label: '眼部护理',
              img: require('../../assets/goods/banner2/5.png')
            },
            {
              label: '护肤套装',
              img: require('../../assets/goods/banner2/6.png')
            },
            {
              label: '防晒隔离',
              img: require('../../assets/goods/banner2/7.png')
            },
          ]
        }]
      } else if (index == 2) {
        info.banner = require('../../assets/goods/banner1/banner1.png')
        info.menuList = [{
            label: '潮流女包',
            list: [{
                label: '钱包/卡包',
                img: require('../../assets/goods/banner3/1.png')
              },
              {
                label: '手拿包',
                img: require('../../assets/goods/banner3/2.png')
              },
              {
                label: '单肩包',
                img: require('../../assets/goods/banner3/3.png')
              },
              {
                label: '双肩包',
                img: require('../../assets/goods/banner3/4.png')
              },
              {
                label: '手提包',
                img: require('../../assets/goods/banner3/5.png')
              },
              {
                label: '斜挎包',
                img: require('../../assets/goods/banner3/6.png')
              },
            ]
          },
          {
            label: '时尚男包',
            list: [{
                label: '钱包/卡包',
                img: require('../../assets/goods/banner3/7.png')
              },
              {
                label: '男士手包',
                img: require('../../assets/goods/banner3/8.png')
              },
              {
                label: '商务公文包',
                img: require('../../assets/goods/banner3/9.png')
              },
            ]
          }
        ]
      }
    }
    return {
      keyWords,
      onSearch,
      active,
      changeItem,
      info
    };
  }
}
</script>

<style lang="less" scoped>
.classify {
  height: 100%;

  .search {
    display: flex;
    align-items: center;

    .title {
      width: 100px;
      text-align: center;
    }
  }

  .content {
    height: calc(100% - 104px);
    display: flex;

    .aside-right {
      width: 100%;
      overflow: hidden;
      padding-top: 20px;
      padding-left: 15px;

      .aside-content {
        width: 100%;
        height: 100%;
        overflow: hidden auto;

        .aside-banner {
          width: 270px;
          height: 115px;
          border-radius: 8px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .aside-list {
          .list-title {
            display: flex;
            align-items: center;
            height: 35px;
            padding-top: 8px;
            font-weight: 500;
          }

          .list-content {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding-top: 6px;

            .content-item {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              width: 75px;
              margin-right: 12px;
              font-size: 12px;
              padding-bottom: 10px;

              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }

      .aside-content::-webkit-scrollbar {
        display: none;
        width: 0 !important;
        height: 0 !important;
        -webkit-appearance: none;
        background: transparent;
      }
    }
  }
}
</style>
