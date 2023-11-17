Page({  
  data: {  
    Sno: '学号',
    Sname:'学生姓名',
    Academy:'学院',
    Class:'班级',
    Tele:'联系电话',
    join:'报名',
    title: 'Hello'  
  },  
  changeTitle: function() {  
    this.setData({  
      title: 'Title Changed!'  
    });  
  },
  joinAct: function() {
    wx.navigateTo({  
      url: '../003/003'  
    });
  },
  Back_01: function() {
    wx.navigateTo({  
      url: '../002/002'  
    });
  }
});