import { modifyUserInfo } from "../../api/request"
import Toast from '@vant/weapp/toast/toast';
// pages/bind_email/bind_email.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
      emailOption:[
        {
          text:'@qq.com', value:'TENCENT'
        },
        {
          text:'@163.com', value:'NETEASE'
        }
      ],
      localPart:'',
      emailCompany:'TENCENT',
      emailAuthCode:''
  },
save(){
  modifyUserInfo({
    localPart:this.data.localPart,
    emailCompany:this.data.emailCompany,
    emailAuthCode:this.data.emailAuthCode
  }).then((res:any)=>{
    switch(res.statusCode){
      case 200:{
        wx.navigateBack();
        wx.showToast({
          title:"保存成功"
        });
        break;
      };
      default:{
        Toast.fail("系统错误");
        break;
      }
    }
  })
}
})