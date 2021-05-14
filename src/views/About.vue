<template>
  <div class="about">
     <a-card title="工作经历" class="work">
        <a-table
          :columns="columns"
          :data-source="dataSource"
          :pagination="false"
          bordered
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
            <a-row type="flex" justify="end" style="padding: 15px 5px">
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
const columns = [
  {

    title: '公司名称',
    dataIndex: 'enterprise',
    align: 'center',
    key: 'enterprise',
    scopedSlots: { customRender: 'enterprise' }
  },
  {
    title: '项目名称',
    dataIndex: 'name',
    align: 'center',
    key: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '项目描述',
    dataIndex: 'describe',
    align: 'center',
    key: 'describe',
    scopedSlots: { customRender: 'describe' }
  },
  {
    title: '项目职责',
    dataIndex: 'duty',
    align: 'center',
    key: 'duty',
    scopedSlots: { customRender: 'duty' }
  },
  {
    title: '项目技术',
    key: 'technology',
    align: 'center',
    dataIndex: 'technology',
    scopedSlots: { customRender: 'technology' }
  },
  {
    title: '操作',
    key: 'operation',
    align: 'center',
    scopedSlots: { customRender: 'operation' }
  }
]
const dataSource = [
  {
    enterprise: '中软国际',
    name: '供需对接市场(market)',
    describe: ' 供需对接市场为企业提供品牌以及产品推广销售的服务，同时也为了采购企业提供了丰富的采购渠道',
    duty: '负责二期market的首页、企业管理、供需详情页、供需管理的页面重构，开发market功能逻辑与后端联调并上线二期',
    technology: '使用相关技术完成开发,具体请查看详情',
    technologys:
    '<p>1、使用Vue2.0 + Ant-Design为技术栈进行项目开发</p>' +
      '<p>2、使用Vue2.0 + Ant-Design为技术栈进行项目开发</p>' +
      '<p>3、根据项目架构配置Vue-router本地开发时启用本地登陆</p>' +
      '<p>4、前后端分离开发时使用mock进行数据构建暂代</p>' +
      '<p>5、使用scss中配置的minxin进行market的黑白主题开发</p>'
  },
  {
    enterprise: '中软国际',
    name: '竞赛管理(competition)',
    describe: '竞赛管理主要为帮助企业管理向公众募集创新解决方案的竞赛提供相关操作功能',
    duty: '负责竞赛首页、我的竞赛、竞赛审核详情页的开发',
    technology: '使用相关技术完成开发,具体请查看详情',
    technologys:
    '<p>1、负责竞赛首页、我的竞赛、竞赛审核详情页的开发</p>' +
      '<p>2、运用模块化、组件化进行项目开发</p>' +
      '<p>3、◇使用导航路由拦截未登录或权限用户的同步访问</p>' +
      '<p>4、◇使用axios来实现与后台数据的交互</p>'
  },
  {
    enterprise: '中软国际',
    name: '企业数据管理成熟度评估系统（dcmmadmin）',
    describe: ' 管理系统的标准适用于组织和机构对数据管理能力成熟度进行评估',
    duty: '负责整个dcmmadmin后管系统的开发（企业管理、文件管理、动态/公告管理、角色管理、自评估试题管理、行业管理、问卷调查）',
    technology: '使用相关技术完成开发,具体请查看详情',
    technologys:
    '<p>1、使用menu进行项目路由的配置</p>' +
      '<p>2、uplode进行封装完成项目功能逻辑</p>' +
      '<p>3、封装组件，进行多页面复用，完成页面交互逻辑</p>' +
      '<p>4、使用Ant-Design进行表格布局化自行完成页面设计，功能逻辑以及后期优化</p>'
  },
  {
    enterprise: '华诺威股份有限公司',
    name: '华诺威商城',
    describe: '该项目对于本公司股东以及合伙人开放的pc端商城页面，方便股东等查询下单订货的一款商城',
    duty: '负责开发找件儿、品牌中心、企业B2b页面开发，根据项目需求及时更新相关功能',
    technology: '使用相关技术完成开发,具体请查看详情',
    technologys:
    '<p>1、使用Vue + Element-UI为技术栈，实现项目整体建构</p>' +
      '<p>2、配置Vue-Router，实现路由功能，进行页面跳转</p>' +
      '<p>3、使用 HTML5 的 localStorage 缓存技术实现页面一些数据缓存</p>' +
      '<p>4、使用axios来实现与后台数据的交互</p>'
  },
  {
    enterprise: '华诺威股份有限公司',
    name: '华诺威汽配数据中心',
    describe: '管理搜索数据平台',
    duty: '编写h5页面，处理prd要求的交互逻辑及表单验证规则及校验成功或失败的提示',
    technology: '使用相关技术完成开发,具体请查看详情',
    technologys:
      '<p>1、使用H5技术（H5+C3+Js）属性实现动态的页面效果</p>' +
      '<p>2、使用 vue-router 实现组件切换</p>' +
      '<p>3、开发首页、标准数据页面、核心数据（别名库、互换件库）页面</p>' +
      '<p>4、使用 Vuex 实现单页应用全局数据共享</p>'
  },
  {
    enterprise: '华诺威股份有限公司',
    name: '联盟快送',
    describe: '项目便于商家的信息管理以及日常订单的配送后台系统',
    duty: '负责相关页面的布局以及数据交互、高度还原设计稿、组件之间的传值',
    technology: '使用相关技术完成开发,具体请查看详情',
    technologys:
      '<p>1、使用vue-cli搭出基本框架，创建项目</p>' +
      '<p>2、Less编写css文件，提升开发效率</p>' +
      '<p>3、使用localstorage配合vuex存储数据，防止刷新页面数据丢失</p>' +
      '<p>4、使用token进行登陆状态判断退出、访问页面使用了本地存储拦截</p>'
  }

]
export default {
  data () {
    return {
      columns,
      dataSource,
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
  methods: {
    goDetail (record) {
      console.log('查看', record)
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
  .work {
    margin: 0 auto;
    width: 1200px;
    height: 600px;
  }
  .tips {
    cursor: pointer;
  }
</style>
