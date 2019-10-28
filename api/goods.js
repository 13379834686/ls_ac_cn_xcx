import request from '../utils/request.js'
// baseUrl也可拼接在request.js中，当有多个鉴权模块，放在这里更灵活
const baseUrl = getApp().globalData.baseUrl

//一级分类
export function getGoodsList(data) {
  console.log(data)
  return request({
    url: `${baseUrl}/goods.goodsLists`,
    method: 'post',
    data
  })
}

