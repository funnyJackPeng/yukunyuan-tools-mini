// pages/join_application_modification/join_application_modification.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:{
      test1:'1',
      test2:'2',
      test3:'3',
      test4:'4',
      test5:'5',
      test6:'6',
      test7:'7',
      test8:'8',
      test9:'9',
      test10:'10',
      test11:'11',
      test12:'12'
    },
    keys:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
      this.setData({
        keys : Object.keys(this.data.test)
      })
  },

save(){
  wx.showToast({
    title:'保存成功'
  })
  
  wx.navigateBack()
},
onChange(event){
  this.setData({
    test: event.detail
  })
console.log(this.data.test[e.currentTarget.dataset.name]);
}

})