import request from '../utils/request.js'
// baseUrl也可拼接在request.js中，当有多个鉴权模块，放在这里更灵活
const baseUrl = getApp().globalData.baseUrl

export function goodsCate(data) {
  return request({
    url: `${baseUrl}/goods.cate`,
    method: 'post',
    data
  })
}

// 调用方式
// import { goodsCate } from '../../api/user.js'
// Page({
//   onLoad: function (options) {
//     this.login()
//   },
//   login() {
//     apiLogin({
//       // api params
//     }).then(res => {
//       // handle success
//     }).catch(error => {
//       // handle error
//     })
//   }
// })