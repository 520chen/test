<template>
<div class="cart">
  <div class="cart-title">购物车</div>
  <div class="empty">
    <img class="empty-img" src="../../assets/cart/empty.png" alt="">
    <div class="empty-tips">
      空空如也
      <div class="navigator" @click="shopping">随便逛逛></div>
    </div>
  </div>
</div>
</template>

<script>
import {
  useRouter
} from "vue-router"
import {
  useStore
} from 'vuex'
export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    const shopping = ()=>{
      console.log(store.state)
      router.push('/search')
    }
    return {
      shopping
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  width: 100%;
  height: calc(100% - 50px);

  .cart-title {
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 7px 3px;
    font-weight: 700;
  }

  .empty {
    width: 100%;
    height: calc(100% - 44px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #fff;

    .empty-img {
      width: 120px;
      height: 80px;
      margin-bottom: 15px;
    }

    .empty-tips {
      display: flex;
      font-size: 13px;
      color: #c0c4cc;

      .navigator {
        color: #fa436a;
        margin-left: 8px;
      }
    }
  }
}
</style>
