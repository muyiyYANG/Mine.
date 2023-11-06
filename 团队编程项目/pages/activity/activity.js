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
            'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/866dd9891938e90b52ec87522b678a28b540c9244c3b38004ca3670776237550954b02f3e73351f2a43c980075659c79?pictype=scale&from=30113&version=3.3.3.3&fname=1684975111844.jpeg&size=750',
            'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/7f881ce187cb0bb0924fc28e94b7e80895d93a035c3e997c4f25229253418c5b78546bbdff1024dee3dc2da40a7da940?pictype=scale&from=30113&version=3.3.3.3&fname=1684975459289.jpeg&size=750',
            'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/2e2fda72ef58b91dcb1bd185062479dee49a24d14302c69a9f8a5e7f1032c451b81e10203aa09efe85745f6a49722be2?pictype=scale&from=30113&version=3.3.3.3&fname=1684975468378.jpeg&size=750'
        ],
        tabList: [{
                id: '1',
                src: '',
                title: '菜单一'
            },
            {
                id: '2',
                src: '',
                title: '菜单二'
            },
            {
                id: '3',
                src: '',
                title: '菜单三'
            },
            {
                id: '4',
                src: '',
                title: '菜单四'
            },
            {
                id: '4',
                src: '',
                title: '菜单五'
            }
        ],
        dataList: [{
                title: '1！',
                text: '详细内容',
                number: '897',
                src: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/2e2fda72ef58b91dcb1bd185062479dee49a24d14302c69a9f8a5e7f1032c451b81e10203aa09efe85745f6a49722be2?pictype=scale&from=30113&version=3.3.3.3&fname=1684975468378.jpeg&size=750'
            },
            {
                title: '2！',
                text: '详细内容',
                number: '578',
                src: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/2e2fda72ef58b91dcb1bd185062479dee49a24d14302c69a9f8a5e7f1032c451b81e10203aa09efe85745f6a49722be2?pictype=scale&from=30113&version=3.3.3.3&fname=1684975468378.jpeg&size=750'
            },
            {
                title: '3！',
                text: '详细内容',
                number: '78',
                src: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/866dd9891938e90b52ec87522b678a28b540c9244c3b38004ca3670776237550954b02f3e73351f2a43c980075659c79?pictype=scale&from=30113&version=3.3.3.3&fname=1684975111844.jpeg&size=750'
            },
            {
                title: '4！',
                text: '详细内容',
                number: '478',
                src: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/866dd9891938e90b52ec87522b678a28b540c9244c3b38004ca3670776237550954b02f3e73351f2a43c980075659c79?pictype=scale&from=30113&version=3.3.3.3&fname=1684975111844.jpeg&size=750'
            },
            {
                title: '5！',
                text: '详细内容',
                number: '378',
                src: 'https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/7f881ce187cb0bb0924fc28e94b7e80895d93a035c3e997c4f25229253418c5b78546bbdff1024dee3dc2da40a7da940?pictype=scale&from=30113&version=3.3.3.3&fname=1684975459289.jpeg&size=750'
            },
        ]
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
