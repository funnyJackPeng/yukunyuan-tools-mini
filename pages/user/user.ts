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

  // 成功登录后，可以直接从 storage 获取 openid, 此 id 可作为用户在后端的唯一标识
  // test(){
  //   const loginId = wx.getStorageSync('loginId')
  //   console.log(loginId);
    
  //   getUserInfo(loginId.openid).then(res=>{
  //     console.log(res);
      
  //   })
  // },

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
      // 验证用户登录信息的状态是否处于有效期
      wx.checkSession({
        success: () => {
          //session_key 未过期，并且在本生命周期一直有效
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
        },
        fail :() => {
          // session_key 已经失效，需要重新执行登录流程
          wx.removeStorageSync('userInfo')
        this.setData({
          userInfo: {
            avatarUrl: defaultAvatarUrl,
            nickName: ''
          },
          hasUserInfo:false
        })
        }
      })
  },

  loginHandle() {
    const userName = this.data.userInfo.nickName
    wx.login({
      success(response) {
        // code:在发送给接口
        getLogin({
           jsCode: response.code,
           userName:userName
          }).then(res => {
          console.log(res);
          wx.setStorageSync('loginId', res.data)
        })
      },
      fail(err) {
        console.log(err);
      }
    })
  }
})
