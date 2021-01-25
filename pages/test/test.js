// pages/test/test.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //手机顶部导航栏高
    statusBarHeight:app.globalData.statusBarHeight,
    //胶囊按钮高
    menuButtonHeight:app.globalData.menuButtonHeight,
    //胶囊top值
    menuButtonTop:app.globalData.menuButtonTop,
    windowWidth:app.globalData.windowWidth,
    topBarMarginTop:app.globalData.topBarMarginTop,
    testCategory:['全部测试','个性人格','婚姻情感','睡眠质量','质量水平','量表测试'],
    navActiveIndex:0,
    testOrderIndex:0,
    testItem:[
      {
        title:'抑郁测试（专业版)',
        desc:'测测你的抑郁有多深',
        testNumber:9689,
        price:9.9,
      },
      {
        title:'焦虑类型鉴别我要吃饭吃好吃的烤面筋',
        desc:'祝你缓解焦虑的治愈测评!',
        testNumber:'188.6万',
        price:0,
      },
      {
        title:'FPA性格色彩测试',
        desc:'红蓝黄绿，你是那种？',
        testNumber:'188.6万',
        price:9.9,
      },
      {
        title:'孤独水平感测试',
        desc:'测一测你当前的孤独状况我要吃饭我要吃饭吃好吃的烤面筋',
        testNumber:'186.7万',
        price:9.9,
      },
      {
        title:'孤独水平感测试',
        desc:'测一测你当前的孤独状况我要吃饭我要吃饭吃好吃的烤面筋',
        testNumber:'186.7万',
        price:9.9,
      },
      {
        title:'孤独水平感测试',
        desc:'测一测你当前的孤独状况我要吃饭我要吃饭吃好吃的烤面筋',
        testNumber:'186.7万',
        price:9.9,
      },
      {
        title:'孤独水平感测试',
        desc:'测一测你当前的孤独状况我要吃饭我要吃饭吃好吃的烤面筋',
        testNumber:'186.7万',
        price:9.9,
      },
      {
        title:'孤独水平感测试',
        desc:'测一测你当前的孤独状况我要吃饭我要吃饭吃好吃的烤面筋',
        testNumber:'186.7万',
        price:9.9,
      }
    ]
  },
  switchLeftNav(e){
    let navActiveIndex=e.currentTarget.dataset.index;
    this.setData({navActiveIndex});
  },
  orderBy(e){
    let index=e.target.dataset.index;
    if(index) this.setData({testOrderIndex:index})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('顶部距离'+this.data.topBarMarginTop)
    // let _data=this.data;
    // _data.topBarPaddingTop=(_data.menuButtonHeight/2+_data.menuButtonTop)-72/750*_data.windowWidth/2;
    // this.setData({topBarPaddingTop:_data.topBarPaddingTop})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})