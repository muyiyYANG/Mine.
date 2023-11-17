
Page({
  data: {
    historyList: []
  },
  onLoad: function () {
    const history = wx.getStorageSync('searchHistory') || [];
    this.setData({
      historyList: history
    });
  },
  onInput: function (e) {
    const inputValue = e.detail.value;
    if (!inputValue) {
      return;
    }
    const history = wx.getStorageSync('searchHistory') || [];
    if (history.includes(inputValue)) {
      history.splice(history.indexOf(inputValue), 1);
    } else {
      history.unshift(inputValue);
    }
    wx.setStorageSync('searchHistory', history);
    this.setData({
      historyList: history
    });
  },
  onItemTap: function (e) {
    const item = e.currentTarget.dataset.item;
    console.log('点击了搜索历史项：', item);
  }
});
