<template>
  <div class="home">
    <header class="index-header">
      <a href="#/mine">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="#/search">
        <div class="header-search"></div>
      </a>
    </header>
    <Swiper @change = 'change' a>
      <SwiperItem>1</SwiperItem>
      <SwiperItem>2</SwiperItem>
      <SwiperItem>3</SwiperItem>
    </Swiper>
    <Swiper @change = 'change'>
      <SwiperItem>1</SwiperItem>
      <SwiperItem>2</SwiperItem>
      <SwiperItem>3</SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    change (payload) {
      console.log('index', payload)
    }
  }
}
</script>

<style lang='scss' scoped>
.home{
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header {
    display: flex;
    height: 44px;
    //三者等分平铺
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    .user-btn{
      width: 25px;
      height: 25px;
      background: url(~@/assets/icon/user-btn.png);
      background-size: 100%;
    }
    .header-logo{
      width: 92px;
      height: 28px;
      background: url(~@/assets/logo.png) no-repeat;
      background-size: 100%;
    }
    .header-search{
       width: 25px;
      height: 25px;
      background: url(~@/assets/icon/header-search.png);
      background-size: 100%;
    }
  }
}
</style>
