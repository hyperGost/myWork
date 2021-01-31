// component/testItem/testItem.js
Component({
  options:{
    styleIsolation:"apply-shared"
  },
  /**
   * 组件的属性列表
   */
  properties: {
    index:Number,
    title:{
      type:String,
      value:'标题'
    },
    desc:{
      type:String,
      value:'描述'
    },
    price:{
      type:Number,
      value:100
    },
    discount:{
      type:Number,
      value:200
    },
    show:{
      type:Boolean,
      value:false
    },
    src:String,
    count:{
      type:Number,
      value:1000
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
