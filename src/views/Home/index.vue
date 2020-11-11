<template>
  <div class="home">
    <index-header></index-header>
    <div class="index-main">
      <Swiper
        @change="change"
        class="my-swiper"
        v-if="bannerList.length > 0"
        :autoplay="2000"
      >
        <SwiperItem v-for="item in bannerList" :key="item.id">
          <img :src="item.imageurl" />
        </SwiperItem>
      </Swiper>
      <index-nav></index-nav>
      <index-recommend
        v-for="item in recommendList"
        :key="item.specialid"
        :info="item"
      ></index-recommend>
      <div class="my-icp">
        <a
          class="record"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006214"
          target="_blank"
        >
          <img
            class="img"
            src="https://wechatapp.zhuishushenqi.com/mhd/201711/gongan.jpg"
          />
          <div>沪公网安备 31011202006214号</div>
        </a>
        <div class="licence">
          增值电信业务经营许可证沪B2-20170022
          <br />网络文化经营许可证沪网文（2016）3206-227号
          <br />出版物经营许可证新出发沪批字第U7659号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getBanner, getIndexRecommend } from '@/api/cartoon'
import indexRecommend from './component/indexRecommend'
import indexHeader from './component/indexHeader'
import indexNav from './component/indexNav'
export default {
  name: 'Home',
  data () {
    return {
      bannerList: [],
      recommendList: []
    }
  },
  components: {
    Swiper,
    SwiperItem,
    indexRecommend,
    indexHeader,
    indexNav
  },
  methods: {
    change (payload) {
      console.log('index', payload)
    },
    getBanner () {
      getBanner()
        .then(res => {
          console.log(res)
          if (res.code === 200) {
            this.bannerList = res.info
          } else {
            alert('网络错误')
          }
        })
        .catch(res => {
          console.log(res.msg)
        })
    },
    getIndexRecommend () {
      getIndexRecommend().then(res => {
        console.log(res)
        if (res.code === 200) {
          this.recommendList = res.info
        } else {
          alert('网络错误')
        }
      })
    }
  },
  created () {
    this.getBanner()
    this.getIndexRecommend()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixins.scss";
.home {
  .index-main {
    flex: 1;
    overflow-y: auto;
  }
  display: flex;
  flex-direction: column;
  height: 100%;
  .my-swiper {
    img {
      width: 100%;
    }
  }
  .my-icp {
    padding: 5px 0;
    font-size: 12px;
    .record {
      display: flex;
      align-items: center;
      justify-content: center;
      .img {
        width: 15px;
        height: 15px;
        margin-right: 4px;
      }
    }
    .licence {
      margin-top: 4px;
      text-align: center;
    }
  }
}
</style>
