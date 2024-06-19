// pages/application/application.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
testA:'测试'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

sendEmail(){
  wx.showToast({
    title:"发送成功",
    icon:'success'
  })
},
modify(){
  wx.navigateTo({
    url : '/pages/join_application_modification/join_application_modification'
  })
}
})
