// pages/userinfo/userinfo.js
Page({
  data: {
    userInfo: [],
    name: '某某',
    studentId: '123456789',
    school: '福州大学',
    college: '计院',
    major: '计科',
    grade:'大一',
    class:'01班',
    academicSystem: '四年',
    cultivationLevel: '本科'
   
    
  },

  editProfile: function() {
    wx.navigateTo({
      url: '/pages/userinfo1/userinfo1'
    });
  },
  onLoad: function () {
    // 从data对象中获取userInfo数组
    var userInfo = this.data.userInfo;

    // 将userInfo数组绑定到页面上
    this.setData({
      userInfo: [...this.data.userInfo, {name, studentId, school, college, major, grade, classNum, academicSystem, cultivationLevel}]
    });
  }
});
