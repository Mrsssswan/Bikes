var myUtil = require("../../utils/myUtil.js")

//index.js

Page({

  data: {

    longitude: 0,

    latitude: 0,

    controls: [],

    markers: []

  },



  //首次加载页面

  onLoad: function () {

    var that = this;

    wx.getLocation({

      success: function (res) {

        var longitude = res.longitude

        var latitude = res.latitude

        that.setData({

          longitude: longitude,

          latitude: latitude

        })

        findBikes(longitude, latitude, that)

      },

    })



    wx.getSystemInfo({

      success: function (res) {

        var windowWidth = res.windowWidth

        var windowHeight = res.windowHeight

        that.setData({

          controls: [

            //扫码开锁的图片位置

            {

              id: 5,

              iconPath: '/image/qrcode.png',

              //图片的相对位置

              position: {

                width: 90,

                height: 60,

                top: 500,

                left: 140

              },

              //是否可点击

              clickable: true

            },

            //充值

            {

              id: 3,

              iconPath: '/image/pay.png',

              //图片的相对位置

              position: {

                width: 40,

                height: 40,

                top: windowHeight - 100,

                left: windowWidth - 45

              },

              //是否可点击

              clickable: true

            },

            //回到原点

            {

              id: 4,

              iconPath: '/image/img1.png',

              //图片的相对位置

              position: {

                width: 40,

                height: 40,

                top: windowHeight - 60,

                left: 10

              },

              //是否可点击

              clickable: true

            },

            //中心点位置

            {

              id: 7,

              iconPath: '/image/location.png',

              //图片的相对位置

              position: {

                width: 20,

                height: 30,

                top: windowHeight / 2 - 10,

                left: windowWidth / 2 - 15

              },

              //是否可点击

              clickable: true

            },

            //报修单车

            {

              id: 6,

              iconPath: '/image/shield.png',

              //图片的相对位置

              position: {

                width: 30,

                height: 30,

                top: windowHeight - 42,

                left: windowWidth - 65

              },

              //是否可点击

              clickable: true

            },

            //添加单车

            {

              id: 8,

              iconPath: '/image/add.png',

              //图片的相对位置

              position: {

                width: 30,

                height: 30,

                top: windowHeight - 500,

                left: windowWidth - 330

              },

              //是否可点击

              clickable: true

            }

          ]



        })

      },

    })

  },



  //控件被点击事件

  controltap: function (res) {

    var that = this;

    var id = res.controlId;

    var status = myUtil.get("status")

    switch (id) {



      //回到原点

      case 4: {

        this.mapCtx.moveToLocation()

        break;

      }

      //扫码开锁

      case 5: {

        //注册

        if (status == 0) {

          wx.navigateTo({

            url: '../register/register',

          })

        } else if (status == 1) {

          wx.navigateTo({

            url: '../deposit/deposit',

          })

        }else if(status ==2){
          wx.navigateTo({

            url: '../auth/auth',

          })
        }



        break;



      }

      case 6: {

        wx.navigateTo({

          url: '../warn/warn',

        })

      }

      //添加车辆

      case 8: {

        //获取到移动后位置的中心点

        this.mapCtx.getCenterLocation({

          success: function (res) {

            var longitude = res.longitude;

            var latitude = res.latitude;

            findBikes(longitude, latitude, that);

            //添加车辆到后台

            wx.request({

              url: 'https://www.mrsssswan.club/addBike.bike',
                  //
              data: {

                id: (new Date().getTime() / 1000),

                location: [longitude, latitude],

                status: 0

              },

              method: 'POST',

              success: function (res) {

                //查找单车，将单车显示在页面

                findBikes(longitude, latitude, that)

              }

            })

          }

        })

        break;

      }

    }





  },



  /**

   * 移动后视野变化触发事件

   * 

   */

  regionchange: function (e) {

    var that = this;

    //获得移动后的位置

    var etype = e.type;

    if (etype == 'end') {

      this.mapCtx.getCenterLocation({

        success: function (res) {

          var longitude = res.longitude;

          var latitude = res.latitude;

          findBikes(longitude, latitude, that);



        }

      })

    }

  },

  onReady: function (e) {

    // 使用 wx.createMapContext 获取 map 上下文

    this.mapCtx = wx.createMapContext('myMap')

  },

})



function findBikes(longitude, latitude, that) {

  wx.request({

    url: 'https://www.mrsssswan.club/findBike.bike',

    data: {

      longitude: longitude,

      latitude: latitude,

    },

    method: 'GET',

    success: function (res) {

      //查找单车，将单车显示在页面

      var bikes = res.data.map((geoResult) => {

        return {

          longitude: geoResult.content.location[0],

          latitude: geoResult.content.location[1],

          iconPath: '/image/bike.png',

          width: 35,

          height: 40,

          id: geoResult.content.id

        }

      })

      //将bike数组的单车取到当前页面上来

      that.setData({

        markers: bikes

      })

    }

  })

}