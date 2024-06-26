import { getLogin } from "../../api/request"
// pages/user/user.ts
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: ''
    },
    hasUserInfo: false
  },
  onChooseAvatar(e: any) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
    if (this.data.hasUserInfo) {
      wx.setStorageSync('userInfo', this.data.userInfo)
      this.loginHandle()
    }
  },
  onInputChange(e: any) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
    if (this.data.hasUserInfo) {
      wx.setStorageSync('userInfo', this.data.userInfo)
      this.loginHandle()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var hasUserInfo:boolean;
    if (wx.getStorageSync('userInfo')) {
      hasUserInfo = true
    }else{
      hasUserInfo = false
    }

    this.setData({
      userInfo: wx.getStorageSync('userInfo'),
      hasUserInfo:hasUserInfo
    })
    console.log(wx.getStorageSync('userInfo'));
    
    console.log(this.data.hasUserInfo)
    
      // // 验证用户登录信息的状态是否处于有效期
      // wx.checkSession({
      //   success: () => {
      
      //   console.log(wx.getUserProfile);

      //     //session_key 未过期，并且在本生命周期一直有效
      //   this.setData({
      //     userInfo: wx.getStorageSync('userInfo'),
      //     hasUserInfo:true
      //   })
      //   },
      //   fail :() => {
      //     // session_key 已经失效，需要重新执行登录流程
      //   this.setData({
      //     hasUserInfo:false
      //   })
      //   }
      // })
  },

  loginHandle() {
    wx.login({
      success(response) {
        // code:在发送给接口
        getLogin({ jsCode: response.code }).then(res => {
          console.log(res);
          wx.setStorageSync('loginID', res.data)
        })
      },
      fail(err) {
        console.log(err);
      }
    })
  }
})
/**
 * openid: "ot2jS5QZFeJm-ovWZc7_Xa3krgf4"
 * openid: "ot2jS5QZFeJm-ovWZc7_Xa3krgf4"
session_key: "1gF/JGU53y2XF9T0Hq16fQ=="
session_key: "Xq5XKtERwLhqfP8uDiEhYg=="
 */
