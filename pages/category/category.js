// pages/category/category.js
// import { goodsCate } from '../../api/goods.js'
var goods = require('../../api/goods.js');
var encykey = require('../../config/constants.js');
var ency = encykey.CRYPTKEY;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeId: 0,
    typeList: [],
    goodsList: [],
    sonCateList: []
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.gCate()
    this.goodsSonActiveCateList()
  },

  // 一级分类
  gCate(){
    var _this = this
    goods.goodsTopCate({
      ency
    }).then(function (res){
      // console.log(res)
      _this.setData({ 
        typeList:res.data.list,
        // 默认第一个一级分类
        activeId: res.data.gid
        })
      }).catch(function (error){
        console.log(error)
    })
  },

  // 获取默认二级分类
  goodsSonActiveCateList(){
    var _this = this
    goods.goodsSonSate({
      ency
    }).then(function (res) {
      _this.setData({
        sonCateList: res.data.list,
      })
      console.log(res)
    }).catch(function (error) {
      console.log(error)
    })
  },

  // 一级分类菜单点击事件获取二级分类
  selectType(e) {
    var _this = this
    // 点击获取当前选中id
    // console.log("222222--"+e.currentTarget.dataset.id)
    goods.goodsSonSate({
      ency,
      typeid: e.currentTarget.dataset.id
    }).then(function (res) {
      _this.setData({ sonCateList: res.data.list })
      console.log(res)
    }).catch(function (error) {
      console.log(error)
    })

    this.setData({
      activeId: e.currentTarget.dataset.id
    })
  },
  
  // 通过navigateTo实现商品跳转
  // goodDatail(e){
  //   // url = "../detail/detail?id={{item.id}}"
  //   // console.log(e.currentTarget.dataset.id)
  //   wx.navigateTo({
  //     url: '../goodslist/goodslist?id=' + e.currentTarget.dataset.id,
  //   })
  // },

  //根据二级分类id跳转到商品列表
  goodslist(e) {
    // url = "../detail/detail?id={{item.id}}"
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../goodslist/goodslist?id=' + e.currentTarget.dataset.id,
    })
  }
  
})