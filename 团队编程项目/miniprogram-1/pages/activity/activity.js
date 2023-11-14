Page({
    /**
     * 页面的初始数据
     */
    data: {
        barHeight: 20, //  顶部状态栏高度
        navBarHeight: 66, // 顶部高度
        viewHeight: 640, // 默认高度
        current: 0,
        background: [
            '../images/activity1.jpg',
            '../images/activity2.jpg',
            '../images/activity3.jpg'
        ],
        tabList: [{
                id: '1',
                src: '../images/activity1.jpg',
                title: '活动'
            },
            {
                id: '2',
                src: '../images/activity2.jpg',
                title: '部落'
            },
            {
                id: '3',
                src: '../images/activity3.jpg',
                title: '平台'
            },
            {
                id: '4',
                src: '../images/activity4.jpg',
                title: '查看'
            },
           
        ],
        dataList: [{
                time:'2023.11.1-2023.11.5',
                title: '大学生观影活动！',
                number: '897',
                src: '../images/activity1.jpg'
            },
            {   
                time:'2023.11.2-2023.11.6',
                title: '2023“联合国采购杯”全国大学生英语阅读大赛',
                number: '578',
                src: '../images/activity2.jpg'
            },
            {   
                time:'2023.11.4-2023.11.8',
                title: '第31届世界大学生夏季运动会',
                number: '78',
                src: '../images/activity3.jpg'
            },
            {   
                time:'2023.11.6-2023.11.12',
                title: '全国大学生英语能力挑战赛',
                number: '478',
                src: '../images/activity4.jpg'
            },
            {   
                time:'2023.11.5-2023.11.28',
                title: '中国高校元宇宙知识竞赛',
                number: '378',
                src: '../images/activity5.jpg'
            },
            {   
                time:'2023.11.1-2023.11.28',
                title: '半导体专项赛',
                number: '378',
                src: '../images/activity6.jpg'
            },
        ]
    },
    
    // 监听搜索输入框输入事件
    onSearchInput(e) {
        const keyword = e.detail.value.trim();
        if (keyword === '') {
        // 如果搜索关键词为空，则显示全部活动
        this.setData({
            searchResultList: this.data.dataList
        });
        } else {
        // 根据关键词进行搜索
        const resultList = this.data.dataList.filter(item => item.title.includes(keyword));
        this.setData({
            searchResultList: resultList
        });
        }
    },
    bindchange(e) {
        this.setData({
            current: e.detail.current
        })
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
