<template>
  <div id="skills">
    <!-- 技能 -->
    <div id="main" ref="chartDom" class="demo">
    </div>
    <!-- 切换 -->
    <a-tooltip placement="bottom" v-if="isShow">
    <template slot="title">
      数据结构
    </template>
    <div class="tips" @click="getChange(1)" v-if="flag === 1">
      <a-icon type="read" class="read" />
    </div>
    <div class="tips" @click="getChange(2)" v-else>
      <a-icon type="read" class="read" />
    </div>
  </a-tooltip>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import demandList from '../apis/about'
// eslint-disable-next-line import/no-duplicates
import demandOption from '../apis/about'

export default {
  props: {
    reshOption: {
      type: Object
      // required: true
    }
  },
  computed: {
    isShow () {
      return !this.reshOption
    }
  },
  data () {
    return {
      flag: undefined
    }
  },
  created () {
    this.getDate()
  },
  methods: {
    getDate () {
      // console.log(demandList, demandOption, '数据')
      this.$nextTick(() => {
        const chartDom = this.$echarts.init(this.$refs.chartDom)
        chartDom.clear()
        if (this.reshOption) {
          chartDom.setOption(this.reshOption, true)
        } else {
          chartDom.setOption(demandOption.option, true)
        }
      })
    },
    getChange (value) {
      if (value === 1) {
        this.getDate()
        this.flag = 2
      } else {
        this.flag = 1
        this.$nextTick(() => {
          const chartDom = this.$echarts.init(this.$refs.chartDom)
          chartDom.clear()
          chartDom.setOption(Object.assign(demandList.elseData), true)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #skills {
    position: relative;
    .demo {
      width: 500px;
      height: 500px;
      // background-color: pink;
    }
    .tips {
      cursor: pointer;
      position: absolute;
      right: 10%;
      top: 0%;
      .read {
        color: skyblue;
        font-size:22px;
      }
    }

  }
   .ant-tooltip-inner {
    color: #fff !important;
    background-color: skyblue !important;
  }
</style>
