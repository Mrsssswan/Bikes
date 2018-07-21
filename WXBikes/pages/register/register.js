// pages/register/register.js
<<<<<<< HEAD

Page({



  /**

   * 页面的初始数据

   */

  data: {

    countryCodes: ["86", "80", "84", "87"],

    countryCodeIndex: 0,

    phoneNum: ""

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



  bindCountryCodeChange: function (e) {



    this.setData({

      countryCodeIndex: e.detail.value

    })

  },



  inputPhoneNum: function (e) {

    this.setData({

      phoneNum: e.detail.value

    })

  },



  genVerifyCode: function () {

    var index = this.data.countryCodeIndex;

    var countryCode = this.data.countryCodes[index];

    var phoneNum = this.data.phoneNum;

    wx.request({

      //小程序访问的网络请求协议必须是https，url里面不能有端口号

      url: "https://www.mrsssswan.club/getcode.bike",

      data: {

        nationCode: countryCode,

        phoneNum: phoneNum

      },

      method: 'GET',

      success: function (res) {

        wx.showToast({

          title: '验证码已发送',

          icon: 'success'

        })

      }

    })

  },



  formSubmit: function (e) {

    var phoneNum = e.detail.value.phoneNum

    var verifyCode = e.detail.value.verifyCode

    //发送手机号和验证码进行校验

    wx.request({

      url: "https://www.mrsssswan.club/verify.bike",

      header: { 'content-type': 'application/x-www-form-urlencoded' },

      data: {

        phoneNum: phoneNum,

        verifyCode: verifyCode

      },

      method: "POST",

      success: function (res) {

        //如果后台校验成功，注册用户

        if (res.data) {

          wx.request({

            url: "https://www.mrsssswan.club/register.bike",

            data: {

              status: 1,

              phoneNum: phoneNum,

              registerDate: new Date()

            },

            method: 'POST',

            //用户信息注册成功，跳转到充值页面

            success: function (res) {

              wx.navigateTo({

                url: '../deposit/deposit'

              })
              //将用户状态设置为1

              getApp().globalData.status = 1

              getApp().globalData.phoneNum = phoneNum

              //将用户信息保存到手机内存卡中

              wx.setStorageSync("status", 1)

              wx.setStorageSync("phoneNum", phoneNum)
            }

          })

        } else {

          wx.showModal({

            title: '提示',

            content: '您输入的验证码有误，请重新输入！',

            showCancel: false

          })

        }

      }

    })

=======
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countryCodes: ["86", "80", "84", "87"],
    countryCodeIndex: 0,
    phoneNum: ""
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

  bindCountryCodeChange: function (e) {
   
    this.setData({
      countryCodeIndex: e.detail.value
    })
  },

  inputPhoneNum: function (e) {
    this.setData({
      phoneNum: e.detail.value
    })
  },

  genVerifyCode: function () {
    var index = this.data.countryCodeIndex;
    var countryCode = this.data.countryCodes[index];
    var phoneNum = this.data.phoneNum;
    wx.request({
      //小程序访问的网络请求协议必须是https，url里面不能有端口号
      url: "http://localhost:8081/getcode",
      data: {
        nationCode: countryCode,
        phoneNum: phoneNum
      },
      method: 'GET',
      success: function (res) {
        wx.showToast({
          title: '验证码已发送',
          icon: 'success'
        })
      }
    })
  },

  formSubmit: function (e) {
    var phoneNum = e.detail.value.phoneNum
    var verifyCode = e.detail.value.verifyCode
    //发送手机号和验证码进行校验
    wx.request({
      url: "http://localhost:8081/verify",
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        phoneNum: phoneNum,
        verifyCode: verifyCode
      },
      method: "POST",
      success: function (res) {
        //如果后台校验成功，注册用户
        if (res.data) {
          wx.request({
            url: "http://localhost:8081/register",
            data:{
              status:1,
              phoneNum: phoneNum,
              registerDate:new Date()
            },
            method: 'POST',
            //用户信息注册成功，跳转到充值页面
            success: function (res) {
              wx.navigateTo({
                url: '../deposit/deposit'
              })
             
             //将用户状态设置为1
              getApp().globalData.status = 1
              getApp().globalData.phoneNum = phoneNum
              //将用户信息保存到手机内存卡中
              wx.setStorageSync("status", 1)
              wx.setStorageSync("phoneNum", phoneNum)
                     
            }
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '您输入的验证码有误，请重新输入！',
            showCancel: false
          })
        }
      }
    })
>>>>>>> 2f63acb9794ac585e90c4b22c9a73d8693e45e85
  }



<<<<<<< HEAD




=======
>>>>>>> 2f63acb9794ac585e90c4b22c9a73d8693e45e85
})