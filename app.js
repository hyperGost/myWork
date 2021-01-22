//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.statusBarHeight=res.statusBarHeight;
        this.globalData.windowWidth=res.windowWidth;
        var menuButton=wx.getMenuButtonBoundingClientRect();
        this.globalData.menuButtonHeight=menuButton.height;
        this.globalData.menuButtonTop=menuButton.top;
        this.globalData.topBarMarginTop=(menuButton.height/2+menuButton.top)-72/750*res.windowWidth/2;
        // console.log('屏幕宽度'+this.globalData.windowWidth)
      },
    });
   
    //获取胶囊按钮高度和top
    // console.log('按钮高度'+menuButton.height)
    // console.log('按钮top'+menuButton.top)
    // console.log(menuButton)
   
  },
  globalData: {
    userInfo: null,
    statusBarHeight:0,
    windowWidth:0,
    menuButtonHeight:0,
    menuButtonTop:0,
    topBarMarginTop:0,
  }
})