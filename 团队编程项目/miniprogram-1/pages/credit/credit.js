// pages/credit/credit.js
Page({
  data: {
    totalcredit: 0, // 累计学分
    creditList: [
      { date: '2023-01-01', score: 0.5 },
      { date: '2023-02-15', score: 0.3 },
      { date: '2023-03-01', score: 0.2 },
      { date: '2023-03-10', score: 0.1 },
      { date: '2023-04-15', score: 0.3 },
      { date: '2023-05-10', score: 0.2 },
      { date: '2023-05-11', score: 0.3 },
      { date: '2023-05-15', score: 0.3 },
      { date: '2023-05-19', score: 0.4 },
      { date: '2023-05-25', score: 0.3 },
      { date: '2023-06-05', score: 0.3 },
      
    ]
  },
  onLoad: function () {
    // 在页面加载时计算累计学分
    this.calculateTotalCredit();
  },
  calculateTotalCredit: function () {
    let totalcredit = 0;
    this.data.creditList.forEach(item => {
      totalcredit += item.score;
    });
    this.setData({
      totalcredit: totalcredit.toFixed(1)
    });
  }
});

