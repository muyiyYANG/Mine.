Page({
    /**
     * 页面的初始数据
     */
    data: {
        barHeight: 20, //  顶部状态栏高度
        navBarHeight: 66, // 顶部高度
        viewHeight: 500, // 默认高度
        current: 0,
        keyword: '',
        background: [
            '../images/activity1.jpg',
            '../images/activity2.jpg',
            '../images/activity3.jpg',
            '../images/activity4.jpg',
            '../images/activity5.jpg',
            '../images/activity6.jpg',
        ],
        //底部菜单
        tabList: [
            {
              id: '1',
              src: '/pages/images/shouye1.png',
              srcSelected: '/pages/images/shouye.png',
              title: '首页'
            },
            {
              id: '2',
              src: '/pages/images/user1.png',
              srcSelected: '/pages/images/user.png',
              title: '个人中心',
              pagePath: '/pages/index/index'
            },
            {
              id: '3',
              src: '/pages/images/huodong1.png',
              srcSelected: '/pages/images/huodong.png',
              title: '发布活动',
              pagePath: '/pages/005/005'
            }
          ],

        //活动列表
        dataList: [{
                id: '1',
                time:'2023.11.1-2023.11.5',
                title: '大学生观影活动！',
                src: '../images/activity1.jpg'
            },
            {   
                id: '2',
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                src: '../images/activity2.jpg'
            },
            {   
                id: '3',
                time:'2023.11.4-2023.11.8',
                title: '第31届世界大学生夏季运动会',
                src: '../images/activity3.jpg'
            },
            {   
                id: '4',
                time:'2023.11.6-2023.11.12',
                title: '全国大学生英语能力挑战赛',
                src: '../images/activity4.jpg'
            },
            {   
                id: '5',
                time:'2023.11.5-2023.11.28',
                title: '中国高校元宇宙知识竞赛',
                src: '../images/activity5.jpg'
            },
            {   
                id: '6',
                time:'2023.11.1-2023.11.28',
                title: '半导体专项赛',
                src: '../images/activity6.jpg'
            },
        ],
        searchResultList: [], // 搜索结果列表
        searchResultIndexList: [], // 搜索结果索引列表
        active: 0,
    },

     // 监听搜索输入框输入事件
    onSearchInput(e) {
        const keyword = e.detail.value.trim();
        if (keyword === '') {
        // 如果搜索关键词为空，则显示全部活动
        this.setData({
            searchResultList: [],
            searchResultIndexList: [],
        });
        } else {
        // 根据关键词进行搜索
        const resultList = this.data.dataList.filter((item, index) => {
            if (item.title.includes(keyword)) {
            return true;
            }
            return false;
        });
        const resultIndexList = resultList.map((item, index) => {
            return this.data.dataList.indexOf(item);
        });
        this.setData({
            searchResultList: resultList,
            searchResultIndexList: resultIndexList,
        });
        }
    },

    // 监听下拉框选项点击事件
    onDropDownClick(event) {
        const { title } = event.currentTarget.dataset;
        if (title) {
        this.setData({
            keyword: title,
            searchResultList: [],
            searchResultIndexList: [],
        });
        }
    },

    onSearchClick() {
        // 获取当前选择的关键词
        const keyword = this.data.keyword;

        if (keyword.trim() !== '') {
            // 根据关键词进行搜索
            const resultList = this.data.dataList.filter((item, index) => {
                if (item.title.includes(keyword)) {
                    return true;
                }
                return false;
            });

            // 跳转至对应的详情页
            if (resultList.length > 0) {
                const index = this.data.dataList.indexOf(resultList[0]);
                wx.navigateTo({
                    url: '/pages/detail' + (index + 1) + '/detail' + (index + 1),
                });
                this.setData({
                    keyword:''
                  });
            } else {
               
            }
        } else {
            // 如果搜索关键词为空，则不执行任何操作
            // 可以添加一些提示或者其他反馈
        }
    },

    


    // 点击轮播图跳转到详情页面
    goToDetailPage: function (e) {
        var index = e.currentTarget.dataset.index; // 获取当前点击的图片索引
        var detailPages = ['/pages/detail1/detail1', '/pages/detail2/detail2', '/pages/detail3/detail3','/pages/detail4/detail4','/pages/detail5/detail5','/pages/detail6/detail6']; // 设6个页面
        var url = detailPages[index];
        // 页面跳转
        wx.navigateTo({
        url: url
        });
    },

    //点击查看更多
    activityall: function (e) {
        wx.navigateTo({
        url: "/pages/activityall/activityall"
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
      

  
    bindchange(e) {
        this.setData({
            current: e.detail.current
        })
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
    }
})
