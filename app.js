//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.statusBarHeight=res.statusBarHeight;
        this.globalData.windowWidth=res.windowWidth;
        console.log('屏幕宽度'+this.globalData.windowWidth)
        // console.log('导航栏高度'+res.statusBarHeight)
      },
    });
    var menuButton=wx.getMenuButtonBoundingClientRect();
    //获取胶囊按钮高度和top
    this.globalData.menuButtonHeight=menuButton.height;
    this.globalData.menuButtonTop=menuButton.top;
    // console.log(a)
    // console.log('按钮高度'+this.globalData.menuButtonHeight)
  },
  globalData: {
    userInfo: null,
    statusBarHeight:0,
    menuButtonHeight:0,
    menuButtonTop:0,
    windowWidth:0
  }
})