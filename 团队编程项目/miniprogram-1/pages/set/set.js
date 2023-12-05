// pages/set/set.js
Page({
  data: { 
    menuitems: [
      { text: '账号信息', url: '/pages/userinfo1/userinfo1', icon: '', tips: '' },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (app.globalData.userInfo) {
      that.setUserInfo(app.globalData.userInfo);
    } else if (that.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setUserInfo(res.userInfo);
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          that.setUserInfo(res.userInfo);
        }
      })
    }
  },

  getUserInfo: function (e) {
    this.setUserInfo(e.detail.userInfo);
  },

  setUserInfo: function (userInfo) {
    if (userInfo != null) {
      app.globalData.userInfo = userInfo
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      })
    }
  },
  logout: function() {
    // 调用微信提供的wx.login API获取到用户的登录态（code）
    wx.login({
      success: res => {
        // 使用获取到的登录态（code）调用微信提供的wx.logout API来退出账号
        wx.logout({
          success: () => {
            console.log('退出成功');
          },
          fail: () => {
            console.log('退出失败');
          }
        });
      },
      fail: () => {
        console.log('获取登录态失败');
      }
    });
  }
})
