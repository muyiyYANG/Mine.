// pages/activity/activity.js
Page({
    data: {
      activities:[
        {name:'大学生观影活动',location:'田径操场',time:'11.10下午7:30',joined:'已参加'},
        {name:'大学生观影活动2',location:'田径操场',time:'11.20下午7:30',joined:'未参加'},
        {name:'大学生观影活动3',location:'田径操场',time:'11.30下午7:30',joined:'未参加'},
        {name:'大学生观影活动4',location:'田径操场',time:'12.10下午7:30',joined:'未参加'},
        {name:'大学生观影活动5',location:'田径操场',time:'12.20下午7:30',joined:'未参加'},
      ]
    },
  onLoad: function (options) {
    // 页面加载时发送数据到后端
    this.sendDataToBackend(this.data.activities);
  },
  sendDataToBackend: function (data) {
    // 使用小程序的 API 发起网络请求
    wx.request({
      url: 'https://your-backend-api-url.com/submitActivities',
      method: 'POST', // 假设使用 POST 方法发送数据
      data: data,
      header: {
        'content-type': 'application/json' // 根据你的后端要求设置合适的 Content-Type
      },
      success: function (res) {
        console.log('数据发送成功', res.data);
      },
      fail: function (error) {
        console.error('数据发送失败', error);
      }
    });
  }

  })
  
  