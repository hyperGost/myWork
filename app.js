//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.statusBarHeight=res.statusBarHeight;
        console.log('导航栏高度'+res.statusBarHeight)
      },
    });
    var a=wx.getMenuButtonBoundingClientRect();
    console.log(a)
  },
  globalData: {
    userInfo: null,
    statusBarHeight:0
  }
})