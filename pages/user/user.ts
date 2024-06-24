import {getLogin} from "../../api/request"
// pages/user/user.ts
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    avatarUrl: defaultAvatarUrl,
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
      //   // 验证用户登录信息的状态是否处于有效期：增加一个接口，然后测试有效期
      //   if(wx.getStorageSync('userInfo')){
      //     this.setData({
      //         userInfo:wx.getStorageSync('userInfo')
      //     })
      // }
  },

//   getUserProfile() {
//     wx.getUserProfile({
//         desc: "展示用户信息",
//         success: (res) => {
//             this.setData({
//                 userInfo:res.userInfo
//             })
//             // this.loginHandle()
//             wx.setStorageSync('userInfo', res.userInfo)
//         }
//     })
// },

// loginHandle(){
//     wx.login({
//         success(response){
//             // code:在发送给接口
//             /**
//              * 如果大家使用此登录接口，使用外网服务器的情况下，必须使用我的AppID
//              * 如果大家使用此登录接口，使用自己的服务器的情况下，需要修改服务器
//              */
//             getLogin({jsCode:response.code}).then(res =>{
//               console.log(res);
//                 wx.setStorageSync('loginID', res.data.data)
//             })
//         },
//         fail(err){
//             console.log(err);
//         }
//     })
// }
})