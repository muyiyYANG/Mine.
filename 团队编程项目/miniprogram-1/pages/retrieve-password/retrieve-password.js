Page({
    /**
     * 页面的初始数据
     */
    data: {
        current: 1,
        mobile: '',
        codeText: '获取验证码',
        modalMessage: '',
        counting: false,
        username: '', // 添加username的初始值
        password: '', // 添加password的初始值
        email: '', // 添加email的初始值
        confirmPassword: '',// 添加confirmPassword的初始值
        code:'',
        showPassword1: false,
        showPassword2: false,
        showPassword3: false
    },
  
  
    // 相应的事件处理函数
    bindUsernameInput: function(e) {
      this.setData({
        username: e.detail.value
      });
    },
    bindPasswordInput: function(e) {
      this.setData({
        password: e.detail.value
      });
    },
    bindPasswordInput2: function(e) {
        this.setData({
          confirmPassword: e.detail.value
        });
      },
    bindEmailInput: function(e) {
      this.setData({
        email: e.detail.value
      });
    },
    // 相应的事件处理函数
    bindCodeInput: function(e) {
        this.setData({
          code: e.detail.value
        });
      },
  
  
    // 忘记密码
    goToRetrievePage: function() {
      wx.navigateTo({
        url: '/pages/retrieve-password/retrieve-password',
      });
    },
  
    // 检查账号密码是否正确的函数
    checkLogin(username, password) {
      // 在这里编写检查账号密码的逻辑，返回true或false
      // 示例代码：
      if (username === '1234' && password === '5678') {
        return true;
      } else {
        return false;
      }
    },
  
   // 验证账号格式是否正确
    validateUsername(username) {
        if (/^\d{11}$/.test(username)) {
        return true;
        } else {
        return false;
        }
    },
  
  
    // 验证邮箱格式是否正确
    validateEmail(email) {
      // 此处使用正则表达式验证邮箱格式
      if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return true;
      } else {
        return false;
      }
    },
  
    // 验证密码格式是否正确
    validatePassword(password) {
      if (password.length >= 6) {
        return true;
      } else {
        return false;
      }
    },
  
    //重置密码
  submit() {
    // 重置
    const username = this.data.username;
    const email = this.data.email;
    const code = this.data.code;
    const password = this.data.password;
    const confirmPassword = this.data.confirmPassword;
    console.log('username:', username);
    console.log('email:', email);
    console.log('password:', password);

      // 验证账号、邮箱和密码格式
      if (!this.validateUsername(username)) {
        wx.showToast({
          title: '账号格式不正确，请输入11位数字',
          icon: 'none',
          duration: 2000
        });
        // 重置账号密码输入框中的内容
        this.setData({
            username: '',
            password: '',
            email:'',
            code:'',
            confirmPassword:''
          });
        return;
      }
      if (!this.validateEmail(email)) {
        wx.showToast({
          title: '邮箱格式不正确，请输入正确的邮箱',
          icon: 'none',
          duration: 2000
        });
        // 重置账号密码输入框中的内容
        this.setData({
            code:'',
            email:''
          });
        return;
      }
      if (!this.validatePassword(password)) {
        wx.showToast({
          title: '密码不得少于6位',
          icon: 'none',
          duration: 2000
        });
        // 重置账号密码输入框中的内容
        this.setData({
            password: '',
            confirmPassword:''
          });
        return;
      }
        // 判断两次输入密码是否一致
        if (password !== confirmPassword) {
            wx.showToast({
            title: '两次输入密码不一致',
            icon: 'none',
            duration: 2000
            });
            // 重置账号密码输入框中的内容
        this.setData({
            password: '',
            confirmPassword:''
          });
            return;
        }

      // 执行修改操作，修改成功后重新登录
      this.registerSuccessCallback();
    },
  
  
    registerSuccessCallback() {
    const email = this.data.email;
      // 修改成功后的逻辑
      wx.request({
        url: 'http://10.133.13.150:5000/search',//根据具体的
        method:'POST',
        data:{
          email: email,
        },
        success(r){
          console.log(r.data)
        }
      })
      

      wx.reLaunch({
        url: '/pages/login/login',
        success: function() {
          // 注册成功后弹出提示框
          wx.showToast({
            title: '已重置密码，请重新登录',
            icon: 'none',
            duration: 2000
          });
        }
      });
    },
  
    closeModal: function() {
      this.setData({
        showModal: false,
        modalMessage: ''
      });
    },
  
    //密码输入
    toggleShowPassword1: function() {
      this.setData({
        showPassword1: !this.data.showPassword1
      });
    },
    //密码输入
    toggleShowPassword2: function() {
      this.setData({
        showPassword2: !this.data.showPassword2
      });
    },
    //密码输入
    toggleShowPassword3: function() {
      this.setData({
        showPassword3: !this.data.showPassword3
      });
    },
  
    // 获取验证码 
    getCode() {
      var that = this;
      if (!that.data.counting) {
        wx.showToast({
          title: '验证码已发送',
        });
        // 开始倒计时60秒
        that.countDown(that, 60);
      }
    },
  
    // 倒计时60秒
    countDown(that, count) {
      if (count == 0) {
        that.setData({
          codeText: '获取验证码',
          counting: false
        });
        return;
      }
      that.setData({
        counting: true,
        codeText: count + '秒后重新获取',
      });
      setTimeout(function() {
        count--;
        that.countDown(that, count);
      }, 1000);
    },
  });