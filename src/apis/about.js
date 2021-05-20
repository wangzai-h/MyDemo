export const elseData = {
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
export const option = {
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
export const reshOption = {
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
        { value: Math.round(Math.random() * 100 + 60), name: 'Vue' },
        { value: Math.round(Math.random() * 100 + 60), name: 'Ant-Design' },
        { value: Math.round(Math.random() * 100 + 60), name: 'Element-UI' },
        { value: Math.round(Math.random() * 100 + 60), name: 'Vant' },
        { value: Math.round(Math.random() * 100 + 60), name: 'HTML5' },
        { value: Math.round(Math.random() * 100 + 60), name: 'CSS3' },
        { value: Math.round(Math.random() * 100 + 60), name: 'JavaScript' },
        { value: Math.round(Math.random() * 100 + 60), name: 'Git' },
        { value: Math.round(Math.random() * 100 + 60), name: 'Npm' }
      ]
    }
  ]
}

export const columns = [
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

export const dataSource = [
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
  elseData,
  option,
  columns,
  dataSource,
  reshOption
}
