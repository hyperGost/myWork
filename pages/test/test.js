// pages/test/test.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:app.globalData.statusBarHeight,
    menuButtonHeight:app.globalData.menuButtonHeight,
    menuButtonTop:app.globalData.menuButtonTop,
    windowWidth:app.globalData.windowWidth,
    topBarPaddingTop:300
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _data=this.data;
    _data.topBarPaddingTop=(_data.menuButtonHeight/2+_data.menuButtonTop)-72/750*_data.windowWidth/2;
    this.setData({topBarPaddingTop:_data.topBarPaddingTop})
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