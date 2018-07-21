var myUtil = require("../../utils/myUtil.js")
<<<<<<< HEAD

// pages/deposit/deposit.js

Page({



  /**

   * 页面的初始数据

   */

  data: {



  },



  deposit: function () {

    var that = this;

    wx.showModal({

      title: '提示',

      content: '是否要充值押金？',

      confirmText: '确认',

      success: function (res) {



        if (res.confirm) {

          wx.showLoading({

            title: '充值中',

            mask: true

          })

          //调用小程序支付接口，成功后，后台请求更新

          var phoneNum = myUtil.get("phoneNum");

          wx.request({

            url: "https://www.mrsssswan.club/deposit.bike",

            data: {

              phoneNum: phoneNum,
              deposit: 299,
              stauts:2
            },

            method: 'POST',

            //成功后跳转到是实名认证

            success: function (res) {

              //关闭对话框 

              wx.hideLoading();

              wx.navigateTo({

                url: '../auth/auth'

              });
              getApp().globalData.status = 2
              wx.setStorageSync("status", 2)
            }

          })

        }

      }

    })

  },





  /**

   * 生命周期函数--监听页面加载

   */

  onLoad: function (options) {



  },



  /**

   * 生命周期函数--监听页面初次渲染完成

   */

  onReady: function () {



  },



  /**

   * 生命周期函数--监听页面显示

   */

  onShow: function () {



  },



  /**

   * 生命周期函数--监听页面隐藏

   */

  onHide: function () {



  },



  /**

   * 生命周期函数--监听页面卸载

   */

  onUnload: function () {



  },



  /**

   * 页面相关事件处理函数--监听用户下拉动作

   */

  onPullDownRefresh: function () {



  },



  /**

   * 页面上拉触底事件的处理函数

   */

  onReachBottom: function () {



  },



  /**

   * 用户点击右上角分享

   */

  onShareAppMessage: function () {



  }

=======
// pages/deposit/deposit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  deposit: function(){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否要充值押金？',
      confirmText:'确认',
      success:function(res){
       
         if(res.confirm){
            wx.showLoading({
              title: '充值中',
              mask:true
            })
        //调用小程序支付接口，成功后，后台请求更新
            var phoneNum = myUtil.get("phoneNum");
            wx.request({
              url: "http://localhost:8081/deposit",            
              data: {
                phoneNum: phoneNum,
                deposit: 299,
                status: 2
              },
              method: 'POST',
              //成功后跳转到是实名认证
              success: function (res) {
                //关闭对话框 
                wx.hideLoading();
                wx.navigateTo({
                  url: '../auth/auth'
                });
              }
            })
         }
  }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
>>>>>>> 2f63acb9794ac585e90c4b22c9a73d8693e45e85
})