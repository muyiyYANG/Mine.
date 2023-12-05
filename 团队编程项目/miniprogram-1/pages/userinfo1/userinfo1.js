// pages/userinfo1/userinfo1.js
Page({
  data: {
    userInfo: {
      account: '',
      number: ''
    }
  },
  onLoad: function(options) {
    // 在页面加载时获取用户信息，并更新data中的userInfo数据
    const userInfo = wx.getStorageSync('userInfo'); // 假设用户信息保存在本地缓存中
    if (typeof userInfo === 'object' && userInfo !== null) { // 确保userInfo是一个对象
      this.setData({
        userInfo: userInfo
      });
    } else {
      // 如果本地缓存中没有用户信息，可以调用微信API获取用户信息和手机号
      wx.getUserProfile({
        desc:'用于完善个人资料',
        lang:'zh_CN',
        success: res => {
          this.setData({
            'userInfo.account': Math.floor(Math.random() * 1000000000) + 1, // 使用系统生成的一串数字作为账号ID
            'userInfo.number': res.userInfo.phoneNumber // 获取到了用户的手机号
          });
          wx.setStorageSync('userInfo', this.data.userInfo); // 将更新后的userInfo信息保存到本地缓存中
        },
        fail: () => {
          // 获取用户信息失败的处理逻辑
        }
      });
    }
  }
});


