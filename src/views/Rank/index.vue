<template>
  <div class="rank">
    <normal-header title="排行"></normal-header>
    <header-type :types = 'types' @click = 'onchange'></header-type>
    <cartoon-list :list = 'list' ></cartoon-list>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
import { unformat } from '@/utils/apiHelp'
import { getRankType } from '@/api/cartoon'
export default {
  name: 'Rank',
  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  },
  data () {
    return {
      rankType: [],
      types: [
        { id: 1, description: '热搜榜', ranktype: 6 },
        { id: 2, description: '人气榜', ranktype: 1 },
        { id: 3, description: '畅销榜', ranktype: 4 },
        { id: 4, description: '新书榜', ranktype: 2 },
        { id: 5, description: '完结榜', ranktype: 5 },
        { id: 6, description: '免费榜', ranktype: 3 }
      ]
    }
  },
  created () {
    this.getRankType(this.types[0].ranktype)
  },
  methods: {
    getRankType (ranktype) {
      return getRankType(ranktype).then(res => {
        if (res.code === 200) {
          this.rankType = JSON.parse(unformat(res.info)).ranklist
          console.log(this.list)
        } else {
          alert('网络错误')
        }
      }).catch(res => {
        alert('网络错误')
      })
    },
    onchange (payload) {
      console.log(payload)
      this.getRankType(payload.data.ranktype)
    }
  },
  computed: {
    list () {
      return this.rankType.map(item => {
        return {
          id: item.bigbookid,
          coverurl: item.coverurl,
          name: item.name,
          view: item.sales,
          author: item.author
        }
      })
    }
  }
}
</script>

<style>
</style>
