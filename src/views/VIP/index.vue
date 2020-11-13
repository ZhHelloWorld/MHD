<template>
  <div class="vip">
      <normal-header title="VIP"></normal-header>
      <div class="vip-main">
        <cartoon-list :list = 'list'></cartoon-list>
      </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'
import { unformat } from '@/utils/apiHelp'
import { getVip } from '@/api/cartoon'
export default {
  name: 'VIP',
  data () {
    return {
      vipList: []
    }
  },
  components: {
    NormalHeader,
    CartoonList
  },
  methods: {
    getVip () {
      getVip().then(res => {
        console.log(JSON.parse(unformat(res.info)).comicsList)
        if (res.code === 200) {
          this.vipList = JSON.parse(unformat(res.info)).comicsList
          console.log(this.vipList)
        } else {
          alert('网络错误')
        }
      }).catch(err => {
        alert(err)
      })
    }
  },
  created () {
    this.getVip()
  },
  computed: {
    list () {
      return this.vipList.map(item => {
        return {
          id: item.bigbook_id,
          coverurl: item.coverurl,
          name: item.bigbook_name,
          author: item.bigbook_author,
          view: item.bigbookview
        }
      })
    }
  }
}
</script>

<style lang = 'scss' scoped>
.vip {
  display: flex;
  flex-direction: column;
  height: 100%;

  .vip-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
