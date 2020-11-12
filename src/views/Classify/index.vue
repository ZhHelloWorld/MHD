<template>
  <div class="classify">
    <normal-header title="分类"></normal-header>
    <div class="classify-main">
      <header-type :types="typeList" @click="onChange"></header-type>
      <cartoon-list :list="list"></cartoon-list>
    </div>
  </div>
</template>

<script>
import CartoonList from '@/components/CartoonList'
import HeaderType from '@/components/HeaderType'
import NormalHeader from '@/components/NormalHeader'
import { getTypes, getTypeList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHelp'
export default {
  name: 'Classify',
  components: {
    CartoonList,
    HeaderType,
    NormalHeader
  },
  data () {
    return {
      typeList: [],
      typeData: []
    }
  },
  methods: {
    getTypes () {
      return getTypes()
        .then(res => {
          console.log(res)
          if (res.code === 200) {
            this.typeList = res.info
          } else {
            alert('网络错误')
          }
        })
        .catch(res => {
          console.log(res.msg)
        })
    },
    getTypeList (subject) {
      getTypeList(subject)
        .then(res => {
          if (res.code === 200) {
            this.typeData = JSON.parse(unformat(res.info)).comicsList
            console.log(this.typeData)
          } else {
            alert('网络错误')
          }
        })
        .catch(res => {
          console.log(res.msg)
        })
    },
    onChange (payload) {
      console.log(this.typeList)
      this.getTypeList(payload.data.targetargument)
    }
  },
  async created () {
    await this.getTypes()
    console.log(this.typeList)
    this.getTypeList(this.typeList[0].targetargument)
  },
  computed: {
    list () {
      return this.typeData.map(item => {
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

<style lang="scss" scoped>
.classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
