// index.js
const app = getApp();
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Component({
  data:{
      userInfo: {
        avatarUrl: defaultAvatarUrl,
        nickName: '',
      },
      hasUserInfo: false,
      canIUseGetUserProfile: wx.canIUse('getUserProfile'),
      canIUseNicknameComp: wx.canIUse('input.type.nickname'),
      menuitems: [
        { text: '基本信息', url: '../userinfo/userinfo', icon: '../../images/jibenxinxi.png', tips: '' },
        { text: '我的活动', url: '../joinactivity/joinactivity',icon: '../../images/shouye.png', tips: '' },
        { text: '学分', url: '../credit/credit',icon: '../../images/xuefen.png', tips: '' },
        { text: '发布活动', url: '../005/005',icon: '../../images/fabuhuodong.png', tips: '' },
        { text: '消息通知', url: '../notice/notice',icon: '../../images/yonghuzhongxin-xiaoxitongzhi.png', tips: '' },
        { text: '设置', url: '../set/set',icon: '../../images/shezhi.png', tips: '' },
      ]
  },
    methods: {
      onChooseAvatar(e) {
        const { avatarUrl } = e.detail
        const { nickName } = this.data.userInfo
        this.setData({
          "userInfo.avatarUrl": avatarUrl,
          hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
        })
      },
      onInputChange(e) {
        const nickName = e.detail.value
        const { avatarUrl } = this.data.userInfo
        this.setData({
          "userInfo.nickName": nickName,
          hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
        })
      },
      getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            console.log(res)
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      },
    },
    onLoad: function () {
      const userInfo = wx.getStorageSync('userInfo');
      if (userInfo) {
        this.setData({
          hasUserInfo: true,
          userInfo,
        });
      } else {
        this.setData({
          canIUseGetUserProfile: wx.canIUse('getUserProfile'),
        });
      }
    },
    
    
})

