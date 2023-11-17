Page({
    /**
     * 页面的初始数据
     */
    data: {
        barHeight: 20, //  顶部状态栏高度
        navBarHeight: 66, // 顶部高度
        viewHeight: 500, // 默认高度
        current: 0,
        
        //底部菜单
        tabList: [
            {
              id: '1',
              src: '/pages/images/shouye1.png',
              srcSelected: '/pages/images/shouye.png',
              title: '首页',
              pagePath: '/pages/activity/activity'
            },
            {
              id: '2',
              src: '/pages/images/user1.png',
              srcSelected: '/pages/images/user.png',
              title: '个人中心',
              pagePath: '/pages/test/test'
            },
            {
              id: '3',
              src: '/pages/images/huodong1.png',
              srcSelected: '/pages/images/huodong.png',
              title: '发布活动',
              pagePath: '/pages/detaill/detaill'
            }
          ],

        //活动列表
        dataList: [{
                time:'2023.11.1-2023.11.5',
                title: '大学生观影活动！',
                src: '../images/activity1.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity2.jpg'
            },
            {   
                time:'2023.11.4-2023.11.8',
                title: '第31届世界大学生夏季运动会',
                src: '../images/activity3.jpg'
            },
            {   
                time:'2023.11.6-2023.11.12',
                title: '全国大学生英语能力挑战赛',
                src: '../images/activity4.jpg'
            },
            {   
                time:'2023.11.5-2023.11.28',
                title: '中国高校元宇宙知识竞赛',
                src: '../images/activity5.jpg'
            },
            {   
                time:'2023.11.1-2023.11.28',
                title: '半导体专项赛',
                src: '../images/activity6.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity7.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity8.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity9.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity10.jpg'
            },
            {
                time:'2023.11.1-2023.11.5',
                title: '大学生观影活动！',
                src: '../images/activity1.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity2.jpg'
            },
            {   
                time:'2023.11.4-2023.11.8',
                title: '第31届世界大学生夏季运动会',
                src: '../images/activity3.jpg'
            },
            {   
                time:'2023.11.6-2023.11.12',
                title: '全国大学生英语能力挑战赛',
                src: '../images/activity4.jpg'
            },
            {   
                time:'2023.11.5-2023.11.28',
                title: '中国高校元宇宙知识竞赛',
                src: '../images/activity5.jpg'
            },
            {   
                time:'2023.11.1-2023.11.28',
                title: '半导体专项赛',
                src: '../images/activity6.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity7.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity8.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity9.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity10.jpg'
            },
            {
                time:'2023.11.1-2023.11.5',
                title: '大学生观影活动！',
                src: '../images/activity1.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity2.jpg'
            },
            {   
                time:'2023.11.4-2023.11.8',
                title: '第31届世界大学生夏季运动会',
                src: '../images/activity3.jpg'
            },
            {   
                time:'2023.11.6-2023.11.12',
                title: '全国大学生英语能力挑战赛',
                src: '../images/activity4.jpg'
            },
            {   
                time:'2023.11.5-2023.11.28',
                title: '中国高校元宇宙知识竞赛',
                src: '../images/activity5.jpg'
            },
            {   
                time:'2023.11.1-2023.11.28',
                title: '半导体专项赛',
                src: '../images/activity6.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity7.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity8.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity9.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity10.jpg'
            },
            {
                time:'2023.11.1-2023.11.5',
                title: '大学生观影活动！',
                src: '../images/activity1.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity2.jpg'
            },
            {   
                time:'2023.11.4-2023.11.8',
                title: '第31届世界大学生夏季运动会',
                src: '../images/activity3.jpg'
            },
            {   
                time:'2023.11.6-2023.11.12',
                title: '全国大学生英语能力挑战赛',
                src: '../images/activity4.jpg'
            },
            {   
                time:'2023.11.5-2023.11.28',
                title: '中国高校元宇宙知识竞赛',
                src: '../images/activity5.jpg'
            },
            {   
                time:'2023.11.1-2023.11.28',
                title: '半导体专项赛',
                src: '../images/activity6.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity7.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity8.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity9.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity10.jpg'
            },
        ],
        active: 0,
    },

      
    // 点击轮播图跳转到详情页面
    goToDetailPage: function (e) {
        var index = e.currentTarget.dataset.index; // 获取当前点击的图片索引
        var detailPages = ['/pages/detail1/detail1', '/pages/detail2/detail2', '/pages/detail3/detail3']; // 假设有三个详情页面
        var url = detailPages[index];
        // 页面跳转
        wx.navigateTo({
        url: url
        });
    },

    goToActivity(event) {
        const index = event.currentTarget.dataset.index;
        
        // 根据索引值 index 来确定要跳转的详情页
        if (index < 6) {
          wx.navigateTo({
            url: '/pages/detail' + (index + 1) + '/detail' + (index + 1)
          });
        } else {
          // 其他情况，跳转至默认的详情页
          wx.navigateTo({
            url: '/pages/activity/activity'
          });
        }
      },
      
      
    

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        var that = this;
        // 胶囊信息
        var menu = wx.getMenuButtonBoundingClientRect();
        wx.getSystemInfo({
            success(res) {
                that.setData({
                    barHeight: res.statusBarHeight,
                    navBarHeight: menu.top + menu.height + 6,
                    viewHeight: res.windowHeight
                })
            }
        })
    },


     // 点击菜单项处理函数
    onTapTab: function(e) {
        var index = e.currentTarget.dataset.index;
        var tabList = this.data.tabList;
        for (var i = 0; i < tabList.length; i++) {
        if (i === index) {
            tabList[i].src = tabList[i].srcSelected; // 切换为选中状态的图片
        } else {
            tabList[i].src = tabList[i].src; // 恢复为未选中状态的图片
        }
        }
        this.setData({
        tabList: tabList
        });

        // 页面跳转
        var pagePath = tabList[index].pagePath;
        wx.navigateTo({
        url: pagePath
        });
    },

})
