<template>
  <div class="swiper-container" ref = "swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.css'
export default {
  name: 'Swiper',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    var that = this
    /* eslint-disable */
    new Swiper(this.$refs.swiper, {
      loop: this.loop,
      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true
      } : false,
      pagination: {
        el: ".swiper-pagination"
      },
      on:{
        slideChangeTransitionEnd:function(){
          // console.log(this.activeIndex,this.realIndex)
          that.$emit('change',this.realIndex)
        }
      }
    });
    /* eslint-enable */
  }
}
</script>

<style lang = 'scss' scoped>
.swiper-container {
  width: 100%;
  height: 180px;
}
</style>
<style lang="scss">
.swiper-pagination-bullet {
  opacity: 1;
  vertical-align: middle;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.7);
}

.swiper-pagination-bullet-active {
  width: 20px;
  height: 10px;
  background: url("../../assets/icon/dot.png") no-repeat;
  background-size: 100%;
}
</style>
