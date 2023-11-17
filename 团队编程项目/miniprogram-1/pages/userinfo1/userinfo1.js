// pages/userinfo1/userinfo1.js
Page({
  data: {
    userInfo: [],
    name: '',
    studentId: '',
    school: '',
    college: '',
    major: '',
    grade: '',
    className: '',
    academicSystem: '',
    cultivationLevel: '',
  },

  onNameInput(e) {
    this.setData({ name: e.detail.value });
  },

  onStudentIdInput(e) {
    this.setData({ studentId: e.detail.value });
  },

  onSchoolInput(e) {
    this.setData({ school: e.detail.value });
  },

  onCollegeInput(e) {
    this.setData({ college: e.detail.value });
  },

  onMajorInput(e) {
    this.setData({ major: e.detail.value });
  },

  onGradeInput(e) {
    this.setData({ grade: e.detail.value });
  },

  onClassInput(e) {
    this.setData({ className: e.detail.value });
  },

  onAcademicSystemInput(e) {
    this.setData({ academicSystem: e.detail.value });
  },

  onCultivationLevelInput(e) {
    this.setData({ cultivationLevel: e.detail.value });
  },

  submitForm() {
    console.log('提交表单数据：', this.data);
  },
  submitForm: function () {
     // 保存成功后返回上一页
    wx.navigateBack();
    // 获取用户输入的信息
    var name = this.inputName.value;
    var studentId = this.inputStudentId.value;
    var school = this.inputSchool.value;
    var college = this.inputCollege.value;
    var major = this.inputMajor.value;
    var grade = this.inputGrade.value;
    var classNum = this.inputClass.value;
    var academicSystem = this.inputAcademicSystem.value;
    var cultivationLevel = this.inputCultivationLevel.value;

    // 将用户输入的信息添加到userInfo数组中
    this.setData({
      userInfo: [...this.data.userInfo, {name, studentId, school, college, major, grade, classNum, academicSystem, cultivationLevel}]
    });

    // 跳转到第二个页面
    wx.navigateTo({
      url: '../pages/userinfo/userinfo'
    });
  }
  
});
