Page({
  data: {},
  submitForm(e) {
    const { activityName, activityTime, activityLocation, activityDescription } = e.detail.value;
    if (!activityName || !activityTime || !activityLocation || !activityDescription) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' });
      return;
    }
    else if(activityName && activityTime && activityLocation  &&activityDescription) {
      wx.navigateTo({  
        url: '../007/007'  
      })
    }
    // 提交表单数据到服务器，这里需要根据实际情况编写代码
    console.log('提交表单数据：', { activityName, activityTime, activityLocation, activityDescription });
    wx.navigateBack(); // 返回上一页
  },
  addAct: function() {
    wx.navigateTo({  
      url: '../007/007'  
    });
  },
  uploadImage:function() {  
    // 调用微信小程序的API来打开图片选择器  
    wx.chooseImage({  
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {  
        // 返回选定照片的本地文件路径  
        const tempFilePaths = res.tempFilePaths  
        // 在这里可以对选定的图片进行后续处理，比如上传到服务器或进行其他操作  
      }  
    })  
  }  
});
