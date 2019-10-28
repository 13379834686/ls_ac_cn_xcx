// pages/goodslist/goodslist.js
var goods = require('../../api/goods.js');
var encykey = require('../../config/constants.js');
var ency = encykey.CRYPTKEY;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateid: -1,
    emptys:"",
    goodsListData: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log('222222---' + this.data.cateid)
    this.setData({
      cateid: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // console.log('111111---' + this.data.cateid)
    var cateid = this.data.cateid
    this.goodsList(cateid);
  },

  goodsList(cateid) {
    var _this = this
    goods.getGoodsList({
      ency,
      cateid
    }).then(function(res) {
      // console.log('22222222222222--')
      // console.log(res)
      _this.setData({
        emptys: res.data.goodsList.length,
        // goodsListData: res.data.goodsList
        goodsListData: res.data.goodsList
      })
    }).catch(function(error) {
      console.log(error)
    });
  },

  btnGoodsDetail(e){
    // console.log('33333333333------')
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../goodsdetail/goodsdetail?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})