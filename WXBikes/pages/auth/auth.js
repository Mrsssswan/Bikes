var myUtil = require("../../utils/myUtil.js")
// pages/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  
  },



formSubmit: function(e) {

  var status = myUtil.get("status");

  var phoneNum = myUtil.get("phoneNum");

  var username = e.detail.value.username

  var idNum = e.detail.value.idNum

  //发送手机号和验证码进行校验

  wx.request({

    url: "https://www.mrsssswan.club/auth.bike",
    data: {

      phoneNum: phoneNum,
      username: username,
      idNum:idNum,
      status:3
    },

    method: "POST",

    success: function (res) {

      wx.navigateTo({

        url: '../index/index'

      });
      getApp().globalData.status = 3
      wx.setStorageSync("status", 3)
    }

  })
}
})