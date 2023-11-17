Page({  
  data: {  
    Sno: '学号',
    Sname:'学生姓名',
    Academy:'学院',
    Class:'班级',
    Tele:'联系电话',
    join:'报名',
    title: 'Hello',
    input_Sno:''
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
  inputChangeHandler: function(e) {  
    // 当用户输入时，更新数据中的 inputValue  
    this.setData({  
      input_Sno: e.detail.value  
    });  
  }   
});