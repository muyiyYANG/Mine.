// pages/userinfo/userinfo.js
Page({
  data: {
    name: '某某',
    studentId: '123456',
    school: '福州大学',
    college: '计算机与大数据学院',
    major: '计算机类',
    grade: '大一',
    Class: '二班',
    academicSystem: '四年',
    cultivationLevel: '本科',
    editable: true
  },
  methods: {
    toggleEdit() {
      this.setData({
        editable: !this.data.editable
      });
    },
    updateName(e) {
      this.setData({
        name: e.detail.value
      });
    },
    updateStudentId(e) {
      this.setData({
        studentId: e.detail.value
      });
    },
    updateSchool(e) {
      this.setData({
        school: e.detail.value
      });
    },
    updateCollege(e) {
      this.setData({
        college: e.detail.value
      });
    },
    updateMajor(e) {
      this.setData({
        major: e.detail.value
      });
    },
    updateGrade(e) {
      this.setData({
        grade: e.detail.value
      });
    },
    updateClass(e) {
      this.setData({
        Class: e.detail.value
      });
    },
    updateAcademicSystem(e) {
      this.setData({
        academicSystem: e.detail.value
      });
    },
    updateCultivationLevel(e) {
      this.setData({
        cultivationLevel: e.detail.value
      });
    },
    editProfile() {
      // 获取用户输入的数据
      const name = this.data.name;
      const studentId = this.data.studentId;
      const school = this.data.school;
      const college = this.data.college;
      const major = this.data.major;
      const grade = this.data.grade;
      const Class = this.data.Class;
      const academicSystem = this.data.academicSystem;
      const cultivationLevel = this.data.cultivationLevel;
    
      // 将数据存储到本地缓存中
      wx.setStorage({
        key: 'userInfo',
        data: {
          name,
          studentId,
          school,
          college,
          major,
          grade,
          Class,
          academicSystem,
          cultivationLevel
        }
      });
    
      // 更新编辑状态为不可编辑
      this.setData({
        editable: false
      });
    }
    
  }
});



