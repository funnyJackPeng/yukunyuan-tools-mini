import { getJoinApplication } from "../../api/request"
import { generateJoinApplicationDataObject } from "../../utils/util"
import Toast from '@vant/weapp/toast/toast';

// pages/application/application.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    referrerNumber: '推荐人号码',
    ownNumber: '自己的号码',
    amount: 3000,
    surname: '姓',
    gender: '性别',
    nickName: '昵称',
    address: '地址',
    date: new Date().toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  },

  onShow() {
      getJoinApplication().then((res: any) =>{
        switch(res.statusCode){
          case 200:{
            this.setData(generateJoinApplicationDataObject(res.data))
          break;
          }
          case 404:{
            Toast("请即时修改邮件模板");
            break;
          }
          default:{
            Toast.fail("系统错误");
            break;
          }
        }
      })
  },

sendEmail(){
  Toast.success("发送成功");
},

modify(){
  wx.navigateTo({
    url : '/pages/join_application_modification/join_application_modification'
  })
}
})
