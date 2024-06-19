// pages/join_application_modification/join_application_modification.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
save(){
  console.log(this.data.name);
  
  wx.showToast({
    title:'保存成功'
  })
  
  wx.navigateTo({
    url:'/pages/join_application/join_application'
  })
  
}
})