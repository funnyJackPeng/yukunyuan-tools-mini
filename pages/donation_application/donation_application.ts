import { getDonationApplication, sendDonationApplicationEmail } from "../../api/request"
import { generateDonationApplicationDataObject } from "../../utils/util"
import Toast from '@vant/weapp/toast/toast';

// pages/donation_application/donation_application.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    referrerNumber: '推荐人号码',
    ownNumber: '自己的号码',
    amount: 3000,
    date: new Date().toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    // 组件变量
    showDialog:false
  },

  onShow() {
    getDonationApplication().then((res: any) =>{
      switch(res.statusCode){
        case 200:{
          this.setData(generateDonationApplicationDataObject(res.data))
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

showDialog(){
  this.setData({
    showDialog:true
  })
},

sendEmail(){
  sendDonationApplicationEmail().then((res:any)=>{
    console.log(res);
    
    switch(res.statusCode){
      case 200:{
        Toast.success("发送成功");
        break;
      };
      case 400:{
        Toast.fail(res.data.message)
        break;
      };
      default:{
        Toast.fail("系统错误！");
        break;
      }
    }
  })
},

modify(){
  wx.navigateTo({
    url : '/pages/donation_application/donation_application_modification'
  })
}
})
