// pages/category/category.js
// import { goodsCate } from '../../api/goods.js'
var goods = require('../../api/goods.js')
var ency = require('../../config/constants.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeId: 0,
    typeList: [],
    goodsList: []

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.gCate()
    this.glists()
  },

  gCate(){
    var _this = this
    goods.goodsCate({
      ency:ency.CRYPTKEY
    }).then(function (res){
      // console.log(res)
      _this.setData({ 
        typeList:res.data.list,
        // activeId: res.data.gid
        })
      }).catch(function (error){
        console.log(error)
    })
  },

  glists(){
    var _this = this
    goods.goodsList({
      ency: ency.CRYPTKEY,
    }).then(function (res) {
      _this.setData({ 
        goodsList: res.data.glist,
      })
      console.log(res)
    }).catch(function (error) {
      console.log(error)
    })
  },


  selectType(e) {
    var _this = this
    // 点击获取当前选中id
    console.log("222222--"+e.currentTarget.dataset.id)
    goods.atGoodsList({
      ency: ency.CRYPTKEY,
      typeid: e.currentTarget.dataset.id
    }).then(function (res) {
      _this.setData({ goodsList: res.data.productList })
      // console.log(res)
    }).catch(function (error) {
      console.log(error)
    })

    this.setData({
      activeId: e.currentTarget.dataset.id
    })
  },
  
  // 通过navigateTo实现商品跳转
  goodDatail(e){
    // url = "../detail/detail?id={{item.id}}"
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../gdetail/gdetail?id=' + e.currentTarget.dataset.id,
    })
  }
  
})