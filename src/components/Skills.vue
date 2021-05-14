<template>
  <div id="skills">
    <!-- 技能 -->
    <div id="main" ref="chartDom" class="demo">
    </div>
     <!-- <a-tooltip placement="bottom">
    <template slot="title">
      数据结构
    </template>
    <div class="tips" @click="getChange(1)" v-if="flag === 1">
      <a-icon type="read" class="read" />
    </div>
    <div class="tips" @click="getChange(2)" v-else>
      <a-icon type="read" class="read" />
    </div>
  </a-tooltip> -->
  </div>
</template>

<script>

export default {
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
      this.flag = 1
      const option = {
        title: {
          text: '专业技能',
          subtext: '技能分布',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} '
        },
        series: [
          {
            name: '技能',
            type: 'pie',
            radius: [20, 140],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 85, name: 'Vue' },
              { value: 85, name: 'Ant-Design' },
              { value: 70, name: 'Element-UI' },
              { value: 70, name: 'Vant' },
              { value: 82, name: 'HTML5' },
              { value: 82, name: 'CSS3' },
              { value: 80, name: 'JavaScript' },
              { value: 75, name: 'Git' },
              { value: 75, name: 'Npm' }
            ]
          }
        ]
      }
      this.$nextTick(() => {
        const chartDom = this.$echarts.init(this.$refs.chartDom)
        chartDom.setOption(option)
      })
    },
    getChange (value) {
      if (value === 1) {
        this.getDate()
        this.flag = 2
      } else {
        this.flag = 1
        const data = {
          title: {
            text: '专业技能',
            subtext: '技能分布'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '0%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['VUE', 'JavaScript', 'Html5', 'Css3', 'Git', 'Npm']
          },
          series: [
            {
              type: 'bar',
              data: [
                {
                  value: 85,
                  itemStyle: {
                    color: '#5470c6'
                  }
                },
                {
                  value: 85,
                  itemStyle: {
                    color: '#91cc75'
                  }
                },
                {
                  value: 76,
                  itemStyle: {
                    color: '#fac858'
                  }
                },
                {
                  value: 76,
                  itemStyle: {
                    color: '#ee6666'
                  }
                },
                {
                  value: 82,
                  itemStyle: {
                    color: '#73c0de'
                  }
                },
                {
                  value: 82,
                  itemStyle: {
                    color: '#3ba272'
                  }
                },
                {
                  value: 80,
                  itemStyle: {
                    color: '#fc8452'
                  }
                },
                {
                  value: 75,
                  itemStyle: {
                    color: '#9a60b4'
                  }
                },
                {
                  value: 70,
                  itemStyle: {
                    color: '#ea7ccc'
                  }
                }
              ]
            }
          ]
        }
        this.$nextTick(() => {
          const chartDom = this.$echarts.init(this.$refs.chartDom)
          chartDom.setOption(Object.assign(data))
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
