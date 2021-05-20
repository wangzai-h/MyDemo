<template>
  <div class="Practice">
    <div class="skills">
      <Skills :reshOption="reshOption"></Skills>
    </div>
    <div class="box">
      <Table :reshDataSource="reshDataSource"></Table>
    </div>
  </div>
</template>

<script>
import Skills from '../../src/components/Skills'
import Table from './About'
import dataList from '../apis/about'

export default {
  components: {
    Skills,
    Table
  },
  data () {
    return {
      reshOption: {},
      reshDataSource: []
    }
  },
  created () {
    this.refresh()
    setTimeout(() => {
      window.location.reload()
    }, 10000)
  },
  methods: {
    // 随机刷新数据
    refresh () {
      this.reshOption = dataList.reshOption
      this.reshDataSource = dataList.dataSource
    }
  }
}
</script>

<style lang="scss" scoped>
 .Practice {
   display: flex;
   flex-direction: initial;
    .skills {
      width: 600px;
      height: 600px;
    }
    .box {
      width: 500px;
      height: 600px;
    }
 }

</style>
