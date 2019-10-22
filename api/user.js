import request from '../utils/request.js'
// baseUrl也可拼接在request.js中，当有多个鉴权模块，放在这里更灵活
const baseUrl = getApp().globalData.baseUrl

export function apiLogin(data) {
  return request({
    url: `${baseUrl}/user/login`,
    method: 'post',
    data
  })
}

export function apiGetUserInfo() {
  return request({
    url: `${baseUrl}/user/userInfo`,
    method: 'get'
  })
}

export function apiModifyUserPassword(data) {
  return request({
    url: `${baseUrl}/user/modifyPassword`,
    method: 'put',
    data
  })
}

export function apiLogout() {
  return request({
    url: `${baseUrl}/user/logout`,
    method: 'delete'
  })
}