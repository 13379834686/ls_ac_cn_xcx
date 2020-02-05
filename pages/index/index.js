// pages/index/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    interval:3000,//切换间隔时间
    autoplay:true,//自动切换
    indicator: true,//显示点击圆点
    //轮播图
    imageUrl: [
      { 'url':'1111111.jpg'},
      { 'url': '222222.jpg' },
      { 'url': '333333.jpg' }
    ],
    //navImg导航按钮图标
    navImg:[
      { 'id': '1', 'title': '返回首页', 'url': '../home/home', 'link':'/pages/home/home'},
      { 'id': '2', 'title': '首页2', 'url': 'nav11111.jpg' ,'link': ''},
      { 'id': '3', 'title': '首页3', 'url': 'nav11111.jpg' ,'link': ''},
      { 'id': '4', 'title': '首页4', 'url': 'nav11111.jpg' ,'link': ''},
      { 'id': '5', 'title': '首页5', 'url': 'nav11111.jpg', 'link': ''},
      { 'id': '6', 'title': '首页6', 'url': 'nav11111.jpg', 'link': ''},
      { 'id': '7', 'title': '首页7', 'url': 'nav11111.jpg', 'link': ''},
      { 'id': '8', 'title': '首页8', 'url': 'nav11111.jpg', 'link': ''},
      { 'id': '9', 'title': '首页首页', 'url': 'nav11111.jpg', 'link': ''},
      { 'id': '10', 'title': '首页首页', 'url': 'nav11111.jpg', 'link': ''},
    ], 
    productList:[
      {'id':'10','name':'商品名称1111111111111111','price':'1111111','sold':'11118','productImg':'/assets/image/p1.jpg'},
      { 'id': '11', 'name': '商品名称2', 'price': '100', 'sold': '5', 'productImg': '/assets/image/p1.png' },
      { 'id': '12', 'name': '商品名称3', 'price': '100', 'sold': '8', 'productImg': '/assets/image/p1.png' },
      { 'id': '13', 'name': '商品名称4', 'price': '100', 'sold': '11', 'productImg': '/assets/image/p1.png' },
      { 'id': '14', 'name': '商品名称5', 'price': '100', 'sold': '21', 'productImg': '/assets/image/p1.png' }
    ]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
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
    wx.reLaunch({
      url: '../home/home'
    })
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

  },

 
})