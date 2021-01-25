//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    epub:[],
    topBarMarginTop:app.globalData.topBarMarginTop,
    windowWidth:app.globalData.windowWidth,
    article:[
      {
        title:'让我们抓狂的罪魁祸首：情绪背后的秘密',
        time:'2020/12/28',
        desc:'人的任何一种情绪都是自然而然产生的结果就像一座山压在你上面我要吃饭',
        isTop:true,
        tag:'人际关系',
        number:33
      },
      {
        title:'心理学专家解释：为什么越是聪明的人头越少',
        time:'2020/12/28',
        desc:'这世界上只有三件事，自己的事，别人的事和老天的事。老天的件事哈',
        isTop:true,
        tag:'人际关系',
        number:33
      },
    ]
  },
  bookDesc(e){
    // wx.request({
    //   url: 'http://api.zhuishushenqi.com/ranking/54d43437d47d13ff21cad58b',
    // })
  }
  ,
  onLoad(options){
    // wx.request({
    //   url: 'https://api.zhuishushenqi.com/ranking/gender',
    //   method:"GET",//小写大写都可以
    //   success:(res1)=>{
    //     var a=[];
    //     var epub=res1.data.epub;
    //    // console.log(epub)
    //     //console.log(this.data)
    //     //console.log(epub[0]._id)
    //     for(let i=0;i<epub.length;i++){
    //     wx.request({
    //        url: 'https://api.zhuishushenqi.com/ranking/'+epub[i]._id,
    //        method:"get",
    //        success:(res2)=>{
    //          a.push({
    //            title:epub[i].title,
    //         books:res2.data.ranking.books
    //         })
    //         this.data.epub=a;
    //         this.setData({epub:a})
    //        }
    //     })
    //     }
    //     console.log("我是")
    //     //console.log(this.data.epub)
    //   }
    // })
  }
})
