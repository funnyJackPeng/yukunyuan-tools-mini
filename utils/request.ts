import Toast from '@vant/weapp/toast/toast';

/**
 * 
 * 分包使用：https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html
 * 
 * @param {string} url 
 * @param {GET|POST} method 
 * @param {string/object/ArrayBuffer} data 
 */
function request(
  url: string,
  method: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT",
  data: object | undefined
) {
  const promise = new Promise((resolve, reject) => {
    var openid: string;
    if (wx.getStorageSync('loginId')) {
      openid = wx.getStorageSync('loginId').openid
    } else {
      wx.switchTab({ url: '/pages/user/user' })
      wx.showToast({
        title:"请先登录！",
        icon:"error"
      })
      return
    }
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        'Authorization': openid
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
      complete() {
        wx.hideLoading()
      }
    })
  })
  return promise;
}

function loginRequest(
  url: string,
  method:"POST" ,
  data: object
){
  const promise = new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
      complete() {
        wx.hideLoading()
      }
    })
  })
  return promise;
}

export {
  request,
  loginRequest
}
