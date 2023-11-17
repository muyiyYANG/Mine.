// index.js
Page({
    data: {
        current: 1,
      activity: {
        image: '/pages/images/activity2.jpg',
        timeRange1: '报名时间：2023.10.31-2023.11.3',
        timeRange2: '活动时间：2023.11.1-2023.11.5',
        level: '校级',
        participation: '20-21级',
        enrolled: 1000, // 已报名人数
        maxCapacity: 1000, // 总报名人数上限
        credittype: '思想成长',
        credit: '0.1',
        neirong1:'1、缓解大家近段时间的紧张情绪，来一次身心上的放松，养精蓄锐，以饱满的情绪迎接下一阶段的学习和活动。',
        neirong2:'2、通过经典英语原声电影的播放，营造英语学习的氛围，提高大家的学习兴趣，丰富同学们的课余生活，普及欧美文化习俗。',
        neirong3:'3、通过微电影汇集大家的创意，引导大家积极创新，开发思维，形成头脑风暴，也以此形式多方面展现支部成员思想动态。',
        neirong4:'4、丰富同学们的课余生活，增进班内同学的交流，增强支部凝聚力，引导班级文娱氛围朝着积极健康的方向发展。',
        neirong5:'5、引导支部成员关注时事，关注历史，提高成员自身综合素质。',
        neirong6:'1.电影观影：组织方会选择一定数量的优秀电影作为参赛作品，邀请参赛者观看这些电影。这些电影可能来自不同国家、不同类型，涵盖多样的题材和风格。',
        neirong7:'2.观影心得撰写：参赛者需要就所观影的电影，撰写观后感、影评或心得体会。这些作品通常要求结合电影的内容、表现形式、艺术特点等方面展开讨论，体现参赛者对电影的深入理解和独到见解。',
        neirong8:'3.评选与奖项设置：组织方会设立专业评审团或者通过公众投票等方式，对参赛者的观影心得进行评选，评选出最佳影评、最佳创意、最佳观影团队等奖项，并举办颁奖典礼进行表彰。',
        neirong9:'4.线上线下交流：除了观影和评选环节，该活动也会组织参赛者之间的线上线下交流活动，如座谈会、影评分享会、电影论坛等，让参赛者有机会与他人交流观影心得、扩展视野、增进友谊。',
        neirong10:'5.宣传推广：为了吸引更多的大学生参与，组织方通常会进行广泛的宣传推广，包括在校园内外张贴海报、通过社交媒体宣传、举办预热活动等。',
        neirong11:'参赛资格：确认你是否符合参赛资格，通常是限定为大学本科生或研究生。报名方式：了解报名方式和截止日期。通常可以通过线上平台或学校指定的渠道进行报名。观影要求：了解观影要求和规则。这可能包括观看指定的电影作品、观看时间限制、观影地点要求等。录入评分：了解如何录入评分或提交观影心得。通常会提供在线评分表格或参赛者平台，你需要按照要求将评分或心得提交。评分标准：了解评委或组织方设定的评分标准。这可能包括剧情、表演、导演技巧、影片主题等各个方面的评价标准。奖项设置：了解比赛的奖项设置和奖励。这可能包括最佳影评、最佳创意、最佳影片等不同类别的奖项。宣传与分享：了解比赛期间的宣传和分享要求。这可能包括在社交媒体上分享观影心得、参加线下或线上的讨论等。时间安排：了解比赛的时间安排，包括观影期限、评审期限、颁奖典礼等重要时间节点。注意事项：阅读组织方提供的注意事项和规定，遵守比赛规则和守信原则，不进行作弊行为。'
    }
    },
    
    signup: function() {
        if (this.data.activity.enrolled >= this.data.activity.maxCapacity) {
          return; // 如果报名人数已满，则不执行任何操作
        }else{
          wx.navigateTo({  
              url: '../002/002'  
            });
        }
      },
      //登陆注册监听
      click: function(event) {
          var code = event.currentTarget.dataset.code;
          this.setData({
          current: code
          });
      }
      });