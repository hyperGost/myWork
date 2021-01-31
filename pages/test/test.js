// pages/test/test.js
const app=getApp();
Page({
 //右边盒子topmargin 32rpx + 70rpx
 //17rpx + 32rpx +
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
    testRecord:0,
    testItem:[],
    pageNum:1
  },
  switchLeftNav(e){
    let navActiveIndex=e.currentTarget.dataset.index;
    this.setData({navActiveIndex});
  },
  orderBy(e){
    let index=e.target.dataset.index;
    if(index) this.setData({testOrderIndex:index})
  },
  imageLoad(e){
    // console.log('图片加载')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //定义过滤函数
    this.formatCount=function(str){
      str=str.toString();
      if(str.length>=5){
        str=(Math.floor(parseInt(str)/100)/100).toString()+'万';
      }
      console.log('格式化')
      return str;
    }
    let testItem=this.data.testItem;
    for(let i=0;i<=9;i++){
      testItem.push({
        title:'孤独感水平测试（专业版）',
        desc:'测测你的抑郁有多深我要吃饭',
        testNumber:968998,
        price:9.9,
        discount:29.9,
        src:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1267931373,3662510004&fm=26&gp=0.jpg',
        show:false
      });
      //格式化人数
      testItem[i].testNumber=this.formatCount(testItem[i].testNumber)
    }
   this.setData({testItem})
    //异步启动图片监听
    setTimeout(()=>{
      for(let i in testItem){
        let obj=wx.createIntersectionObserver();
        obj.relativeToViewport({bottom:0}).observe('.lazy-'+i,(res)=>{
        console.log('启动监听')
        if(testItem[i].show){
          //如果这个图片已经被加载 则取消这个图片的监听
          obj.disconnect()
        }
        else{//图片进入显示区域就加载
            if(res.intersectionRatio>0){
              testItem[i].show=true;
              this.setData({testItem})
            }
          }
        })
      }
    },0)
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
    // console.log('上拉刷新');
    wx.showLoading({
      title: '加载中',
    });
    let testItem=this.data.testItem,
    startIndex=testItem.length;
    //添加数据
    for(let i=0;i<=9;i++){
      testItem.push({
        title:'抑郁测试（专业版)',
        desc:'测测你的抑郁有多深',
        testNumber:165473,
        price:9.9,
        discount:29.9,
        src:'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1267931373,3662510004&fm=26&gp=0.jpg',
        show:false
      })
      testItem[startIndex+i].testNumber=this.formatCount(testItem[startIndex+i].testNumber)
    }
    this.setData({testItem});
    //数据添加完毕
    setTimeout(()=>{
      for(let i=startIndex;i<testItem.length;i++){
        let obj=wx.createIntersectionObserver();
        obj.relativeToViewport({bottom:0}).observe('.lazy-'+i,(res)=>{
        console.log('启动监听')
        if(testItem[i].show){
          //如果这个图片已经被加载 则取消这个图片的监听
          obj.disconnect()
        }
        else{//图片进入显示区域就加载
            if(res.intersectionRatio>0){
              console.log('加载出图片了')
              testItem[i].show=true;
              this.setData({testItem})
            }
          }
        })
      }
    },0)


    wx.hideLoading();
    // this.setData({pageNum:this.data.pageNum+1});
    // wx.request({
    //   url: 'url',
    //   data:{
    //     pageNum:this.data.pageNum,
    //     pageSize:10
    //   },
    //   method:'GET',
    //   header:{
    //     'content-type':'application/text'
    //   },
    //   success:(res)=>{

    //   }
    // })
    // console.log(this.data.pageNum);
    // setTimeout(()=>{
    //   wx.hideLoading()
    // },1000)
  },
  // onPageScroll(e){
  //   console.log(e.scrollTop)
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})