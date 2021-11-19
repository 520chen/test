<template>
<div class="home">
  <router-view></router-view>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" @change="changeVal">
    <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
import {
  ref,
  watch
} from "vue"
import {
  useRouter
} from "vue-router"
import {
  useStore
} from 'vuex'
export default {
  setup() {
    const active = ref(0);
    const router = useRouter()
    const store = useStore()
    const changeVal = (value) => {
      store.state.active = value
      if (value == 0) {
        router.push('/search')
      }else if(value == 1) {
        router.push('/classify')
      }else if(value == 2) {
        router.push('/cart')
      }else if(value == 3) {
        router.push('/user')
      }
    }
    watch(store.state.active,(newVal)=>{
      console.log(newVal)
    })
    return {
      active,
      changeVal
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>