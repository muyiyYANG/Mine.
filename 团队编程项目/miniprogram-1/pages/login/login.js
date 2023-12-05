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
        dlusername:'',
        dlpassword:'',
        username: '', // 添加username的初始值
        password: '', // 添加password的初始值
        email: '', // 添加email的初始值
        confirmPassword: '',// 添加confirmPassword的初始值
        code:'',
        codes:'',
        showPassword1: false,
        showPassword2: false,
        showPassword3: false
    },
  
    //游客进入
    youke: function() {
      wx.navigateTo({
        url: '/pages/activity/activity'
      });
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
    dlbindUsernameInput: function(e) {
        this.setData({
          dlusername: e.detail.value
        });
      },
      dlbindPasswordInput: function(e) {
        this.setData({
          dlpassword: e.detail.value
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
    bindCodeInput: function(e) {
        this.setData({
          code: e.detail.value
        });
      },
  

    // 登陆注册监听
    click: function(event) {
      var code = event.currentTarget.dataset.code;
      this.setData({
        current: code
      });
    },
  
    // 忘记密码
    goToRetrievePage: function() {
      wx.navigateTo({
        url: '/pages/retrieve-password/retrieve-password',
      });
    },
  
    // 检查账号密码是否正确的函数
    checkLogin(dlusername, dlpassword) {
      // 在这里编写检查账号密码的逻辑，返回true或false
      // 示例代码：
      if (dlusername === '11111111111' && dlpassword === '123456') {
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
  
    // 获取验证码 
    getCode() {
        const email = this.data.email;
        
          var that = this;
          if (!that.data.counting) {
            wx.showToast({
              title: '验证码已发送',
            });
            wx.request({
                url: 'http://10.133.13.150:5000/email',
                method:'POST',
                data:{
                  email:email,
                },
                success: (r) => {
                    console.log(r.data);
                    const codes = r.data;
                    this.setData({
                        codes: codes  // Set codes in the data
                      });
                  }
                });
            // 开始倒计时60秒
            that.countDown(that, 60);
          }
        },
        
    // 登录、注册
  submit() {
    if (this.data.current === 1) {
      // 登录操作
      const dlusername = this.data.dlusername;
      const dlpassword = this.data.dlpassword;
        
      wx.request({
        url: 'http://10.133.13.150:5000/login',
        method:'POST',
        data:{
          accountoremail: dlusername,
          password: dlpassword
        },
        success: (r) => {
            console.log(r.data);
            if (r.data == '登录成功') {
              wx.redirectTo({
                url: '/pages/activity/activity'
              });
            } else {
              wx.showToast({
                title: r.data,
                icon: 'none',
                duration: 2000
              });
              this.setData({
                dlusername: '',
                dlpassword: ''
              });
            }
        }
      })
    } else {
    // 注册操作
    const username = this.data.username;
    const email = this.data.email;
    const code = this.data.code;
    const password = this.data.password;
    const confirmPassword = this.data.confirmPassword;
    const codes = this.data.codes;
    console.log('username:', username);
    console.log('email:', email);
    console.log('password:', password);
    console.log('code:', code);
    console.log('codes:', codes);

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
    // 判断验证码是否正确
    if (code.toString().trim() !== codes.toString().trim()) {
        wx.showToast({
        title: '验证码输入错误',
        icon: 'none',
        duration: 2000
        });
        this.setData({
        code: '',
        password: '',
        confirmPassword: ''
        });
        return;
    }
      // 执行注册操作，注册成功后重新登录
      this.registerSuccessCallback();
    }
  },
  
    

    registerSuccessCallback() {
    const username = this.data.username;
    const email = this.data.email;
    const password = this.data.password;
      // 注册成功后的逻辑
      wx.request({
        url: 'http://10.133.13.150:5000/regist',
        method:'POST',
        data:{
          email: email,
          account: username,
          password:password
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
            title: '注册成功，请重新登录',
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
  
    
  
    // 倒计时60秒
    countDown(that, count) {
      if (count == 0) {
        that.setData({
          codeText: '重新获取验证码',
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
  