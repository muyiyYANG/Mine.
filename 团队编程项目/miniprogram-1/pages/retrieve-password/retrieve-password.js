Page({
    /**
     * 页面的初始数据
     */
    data: {
      codeText:'获取验证码',
      modalMessage: '',
      counting:false,

    },


    //跳转下一个页面
    submit: function () {
        // 点击确认按钮的逻辑处理
            // ...
        
        // 页面跳转到主页面
        wx.navigateBack({
            delta: 1 
            })
        },
            
    
      closeModal: function () {
        this.setData({
          showModal: false,
          modalMessage: ''
        })
      },
      
    //获取验证码 
    getCode(){
      var that = this;
      if (!that.data.counting) {
        wx.showToast({
          title: '验证码已发送',
        })
        //开始倒计时60秒
        that.countDown(that, 60);
      } 
    },

    //倒计时60秒
    countDown(that,count){
      if (count == 0) {
        that.setData({
          codeText: '获取验证码',
          counting:false
        })
        return;
      }
      that.setData({
        counting:true,
        codeText: count + '秒后重新获取',
      })
      setTimeout(function(){
        count--;
        that.countDown(that, count);
      }, 1000);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
  
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
  
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
  
    }
  })
  