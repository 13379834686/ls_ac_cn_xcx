// pages/category/category.js
var ency = require('../../config/constants.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeId: '1',
    typeList: [],
    goodsList: [{
        'id': '1',
        'title': '商品1',
      'img': '/assets/image/cg1.jpg'
      },
      {
        'id': '2',
        'title': '商品2',
        'img': '/assets/image/cg1.jpg'
      },
      {
        'id': '3',
        'title': '商品3',
        'img': '/assets/image/cg1.jpg'
      },
      {
        'id': '4',
        'title': '商品4',
        'img': '/assets/image/cg1.jpg'
      },

    ]

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this
    
    wx.request({
      url: 'https://ls.obj.ac.cn/goods.cate',
      method:'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data:{
        ency: ency.CRYPTKEY
      },
      success:function(res){
        console.log(res.data.data);
        that.setData({
          typeList: res.data.data,
          
        })
      },
    })
  },


  selectType(e) {
    // 点击获取当前选中id
    // console.log(e.currentTarget.dataset.id)
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