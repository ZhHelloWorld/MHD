<template>
  <div class="header-type">
        <div class="item" v-for='(item,index) in types' :key='item.id' :class="{'active':activeIndex === index}" @click='handerClick(item,index)'>{{item.description}}</div>
      </div>
</template>

<script>
export default {
  name: 'HeaderType',
  props: {
    types: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handerClick (data, index) {
      this.activeIndex = index
      this.$emit('click', { data, index })
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  }
}
</script>

<style lang="scss" scopd>
.header-type {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  border-bottom: 1px solid #dbd9dc;
  .item {
    width: 20%;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #000;
    &.active {
      color: #e7370c;
    }
  }
}

</style>
