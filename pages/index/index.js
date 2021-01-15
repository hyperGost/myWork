//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    epub:[]
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
