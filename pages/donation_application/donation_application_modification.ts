import {
  getDonationApplication,
  createDonationApplication,
  modifyDonationApplication
} from "../../api/request";
import { generateDonationApplicationDataObject } from "../../utils/util";
import Toast from '@vant/weapp/toast/toast';
// pages/donation_application/donation_application_modification.ts
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
    needCreateTemplate:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow() {
    getDonationApplication().then((res: any) =>{
      switch(res.statusCode){
        case 200:{
          this.setData(generateDonationApplicationDataObject(res.data));
          this.setData({
            needCreateTemplate:false
          })
        break;
        }
        case 404:{
          Toast("请即时修改邮件模板");
          this.setData({
            needCreateTemplate:true
          });
          break;
        }
        default: Toast.fail("系统错误")
      }
    })
  },
  
  save() {
    if(this.data.amount<3000 || this.data.amount>30000){
      Toast.fail("单次申请的金额只能在三千到三万之间")
      return
    }
    var promise:Promise<any>;
    if(this.data.needCreateTemplate){
      promise =  createDonationApplication(generateDonationApplicationDataObject(this.data))
    }else{
      promise =  modifyDonationApplication(generateDonationApplicationDataObject(this.data))
    }
    promise.then((res:any)=>{
      switch(res.statusCode){
        case 201:
        case 200:{
          this.setData(generateDonationApplicationDataObject(res.data));
          wx.navigateBack();
          wx.showToast({
            title:"保存成功"
          });
        break;
        };
        case 400:{
          Toast.fail("请检查输入内容");
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
