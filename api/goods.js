import request from '../utils/request.js'
// baseUrl也可拼接在request.js中，当有多个鉴权模块，放在这里更灵活
const baseUrl = getApp().globalData.baseUrl

//一级分类
export function goodsTopCate(data) {
  // console.log(data)
  return request({
    url: `${baseUrl}/goods.cate`,
    method: 'post',
    data
  })
}

export function goodsSonSate(data) {
  return request({
    url: `${baseUrl}/goods.sonCate`,
    method: 'post',
    data
  })
}

//二级分类
// export function goodsSonCate(data) {
//   console.log('111111---')
//   console.log(data)
//   // return wx.request({
//   //   url: `${baseUrl}/goods.sonCate`,
//   //   method: 'post',
//   //   data
//   // })
// }
