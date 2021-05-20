<template>
  <div class="about" :class="!this.reshDataSource? 'maxWidth':'minWidth' " >
      <a-card title="工作经历" class="work" >
        <!-- <a-spin size="large" class="a_spin" v-if="showSpin" /> -->
              <a-table
                :columns="dataInfo.columns"
                :data-source="dataInfo.dataSource"
                :pagination="false"
                bordered
                :rowKey="(record,index) => {return index}"
              >
                <template slot="name" slot-scope="text, record">
                    <a-tooltip>
                      <template slot="title">
                        {{ record.name }}
                      </template>
                      <p class="tips">{{ record.name | introFilter() }}</p>
                    </a-tooltip>
                </template>
                <template slot="describe" slot-scope="text, record">
                    <a-tooltip>
                      <template slot="title">
                        {{ record.describe }}
                      </template>
                      <p class="tips">{{ record.describe | introFilter(5) }}</p>
                    </a-tooltip>
                </template>
                <template slot="duty" slot-scope="text, record">
                    <a-tooltip>
                      <template slot="title">
                        {{ record.duty }}
                      </template>
                      <p class="tips">{{ record.duty | introFilter(5) }}</p>
                    </a-tooltip>
                  </template>
                <template slot="technology" slot-scope="text, record">
                    <a-tooltip>
                      <template slot="title">
                        {{ record.technology }}
                      </template>
                      <p class="tips">{{ record.technology | introFilter(5) }}</p>
                    </a-tooltip>
                </template>
                <template slot="operation" slot-scope="text, record">
                  <a-button type="link" @click="goDetail(record)">
                      查看
                    </a-button>
                </template>
              </a-table>
              <a-row type="flex" justify="end" style="padding: 15px 5px" v-show="!showSpin">
               <a-col v-if="!this.reshDataSource">
                <a-button type="primary" style="marginRight:10px;" @click="$router.push('/practice')">查看数据</a-button>
              </a-col>
              <a-col>
                <a-button type="primary" @click="$router.push('/')">返回</a-button>
              </a-col>
            </a-row>
      </a-card>
      <a-modal
        v-model="visible"
        title="工作详情"
        width="800px"
        @ok="hideModal"
        :footer="null"
      >
        <a-form-model :model="detailInfo" v-bind="layout">
          <a-form-model-item label="公司名称">
             {{ detailInfo.enterprise }}
           </a-form-model-item>
          <a-form-model-item label="项目名称">
             {{ detailInfo.name }}
           </a-form-model-item>
          <a-form-model-item label="项目描述">
             {{ detailInfo.describe }}
           </a-form-model-item>
          <a-form-model-item label="项目职责">
             {{ detailInfo.duty }}
           </a-form-model-item>
          <a-form-model-item label="项目技术">
            <div v-html="detailInfo.technologys"></div>
           </a-form-model-item>
        </a-form-model>
         <a-row type="flex" justify="center" style="padding: 10px 0">
        <a-col>
          <a-button type="primary" @click="hideModal">关闭</a-button>
        </a-col>
      </a-row>
      </a-modal>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-duplicates
import dataList from '../apis/about'
var _ = require('lodash')
export default {
  props: {
    reshDataSource: {
      type: Array
    }
  },
  data () {
    return {
      visible: false,
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 18 }
      },
      detailInfo: {
        enterprise: undefined,
        name: undefined,
        describe: undefined,
        duty: undefined,
        technology: undefined
      },
      // showSpin: true,
      dataInfo: {
        dataSource: [],
        columns: []
      }
    }
  },
  filters: {
    // 标题
    introFilter (val, num) {
      if (val?.length > num) {
        return val.substr(0, num) + '...'
      } else {
        return val
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    // 获取数据
    getData () {
      if (this.reshDataSource) {
        this.dataInfo.dataSource = _.shuffle(this.reshDataSource)
        this.dataInfo.columns = dataList.columns
      } else {
        this.dataInfo.dataSource = dataList.dataSource
        this.dataInfo.columns = dataList.columns
      }
    },
    // 查看详情
    goDetail (record) {
      this.visible = true
      this.detailInfo = Object.assign(record)
    },
    hideModal () {
      this.visible = false
    }
  }
}
</script>
<style scoped lang="scss">
  .maxWidth {
    width: 1200px;
    margin: 0 auto;
     height: 600px;
  }
  .minWidth {
     width: 900px;
     height: 600px;
  }
  .tips {
    cursor: pointer;
  }
  .a_spin {
    margin-top: 20%;
  }
</style>
