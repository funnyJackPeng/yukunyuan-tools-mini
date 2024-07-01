// pages/bind_email/bind_email.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
      emailOption:[
        {
          text:"@qq.com", value:"TENCENT"
        },
        {
          text:"@163.com", value:"NETEASE"
        }
      ],
      localPart:'',
      emailCompany:''
  },
save(){
  console.log(this.data.localPart);
  console.log(this.data.emailCompany);
  
  
}
})