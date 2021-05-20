<template>
  <div class="home">
     <a-card title="个人简历" class="flexDemo">
       <div class="skills">
         <!-- 专业技能 -->
          <Skills> </Skills>
          <!-- 基本信息 -->
          <div class="introduce">
            <div class="header">
               <Preview
                :imgList="[picUrl]"
                :key="picUrl"
                size="default"
                class="logo"
              >
              </Preview>
            </div>
             <h3> 基础信息</h3>
             <p v-for="(item, index) in list" :key="index">
               {{item}}
             </p>
             <h4>教育背景</h4>
             <p class="else"><span>2014.09–2018.07</span> <span> 郑州工业应用技术学院</span>  <span> 本科</span></p>
             <h4>工作经验</h4>
             <p>中软国际 & 华诺威股份有限公司
               <span class="work" @click="$router.push('/about')"><a-icon type="tablet" class="works" />点击查看</span>
             </p>

          </div>
       </div>
       <div class="describe">
           <h2> 技能描述</h2>
           <p v-for="(item,index) in describeList" :key="index" class="items" id="demoItem" :ref="demoItem">
              <a-icon class="smile" type="smile" />{{item}}
           </p>
        </div>
     </a-card>
  </div>
</template>

<script>
import Skills from '@/components/Skills.vue'
import Preview from '@/components/common/Preview'
export default {
  name: 'Home',
  components: {
    Skills,
    Preview
  },
  data () {
    return {
      picUrl: undefined,
      list: [
        '姓名：旺仔',
        '性别：女',
        '籍贯：河南',
        '电话：17737030818',
        'Email：2865802242@qq.com',
        '地址：上海市浦东新区张江路'
      ],
      describeList: [
        '熟练使用H5/C3 + JS完成页面效果；',
        '熟练掌握DIV + CSS布局，能够书写结构良好并且符合语义化的Html；',
        '熟练使用百分百布局、flex布局、以及使用CSS预编译语言less、sass、scss；',
        '熟练掌握原生Js，能够运用基于Ajax、axios进行前后端交互;',
        '熟练组件化、模块化开发模式；',
        '熟悉Git、Npm等代码管理与构建工具；',
        '熟练使用前端主流框架Vue、能够使用Vue全家桶构建并配合Ant-Design、Element-UI、Vant等组件库进行开发；'
      ]
    }
  },
  created () {
    this.picUrl = 'http://p4.itc.cn/q_70/images03/20200709/bc6ff7ec114846f1b8cf63dde6468ff3.jpeg'
  }
}
</script>
<style lang="scss" scoped>
  .flexDemo {
    margin: 0 auto;
    width: 1000px;
    height: 950px;
    // background-color: pink;
    .skills {
      display: flex;
      .introduce {
        position: relative;
        .header {
          position: absolute;
          right: 4%;
          top: 8%;
        }
        width: 50%;
        margin-left: 20px;
        h3,h4 {
          text-align: center;
          font-weight: 700;
          font-size: 18px;
        }
        h4 {
          margin-top: 40px;
        }
        p {
          text-align: left;
          font-size: 16px;
        }
        .else {
          margin-top: 20px;
          span {
            margin-right: 20px;
          }
        }
      }
    }
    .smile {
      // background-color: pink;
      color: skyblue;
      font-size: 18px;
      margin-right: 10px;
    }
    .items {
      text-align: left;
      font-size: 18px;
    }
    .work {
      float: right;
      width: 100px;
      cursor: pointer;
      color: skyblue;
    }
    .works {
      margin-right: 5px;
    }
  }
</style>
