// component/Topbar/Topbar.js
const app=getApp();
console.log(app.globalData.topBarMarginTop);
Component({
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    height:{
      type:Number,
      value:100
    },
    title:{
      type:String,
      value:'标题'
    },
    mgBottom:{
      type:Number,
      value:100
    }

  },
  /**
   * 组件的初始数据
   */
  data: {
    topBarPaddingTop:app.globalData.topBarMarginTop,
    windowWidth:app.globalData.windowWidth,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
