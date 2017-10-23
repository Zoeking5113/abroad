Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected:true,
    colleges:[{
      schoolImg:'http://192.168.1.153/Pages/images/school1.jpg',
      schoolName:'伯明翰大学',
      applyNumber:'7829',
      english:'University of Birmingham'
    },
    {
        schoolImg: 'http://192.168.1.153/Pages/images/school1.jpg',
        schoolName: '伯明翰大学',
        applyNumber: '7829',
        english: 'University of Birmingham'
      },
      {
        schoolImg: 'http://192.168.1.153/Pages/images/school1.jpg',
        schoolName: '伯明翰大学',
        applyNumber: '7829',
        english: 'University of Birmingham'
    },
    {
      schoolImg: 'http://192.168.1.153/Pages/images/school1.jpg',
      schoolName: '伯明翰大学',
      applyNumber: '7829',
      english: 'University of Birmingham'
    }
    ],
    major:[{
      majorImg:'http://192.168.1.153/Pages/images/MBA.png',
      majorName: '企业管理与酒店运营'
    },
      {
        majorImg: 'http://192.168.1.153/Pages/images/child.png',
        majorName: '进阶幼儿教育'
      },
      {
        majorImg: 'http://192.168.1.153/Pages/images/trainNurse.png',
        majorName: '见习护士'
      }, {
        majorImg: 'http://192.168.1.153/Pages/images/regNurse.png',
        majorName: '注册护士'
      }, {
        majorImg: 'http://192.168.1.153/Pages/images/bussiness.png',
        majorName: '工商管理和酒店运营'
      }
      , {
        majorImg: 'http://192.168.1.153/Pages/images/cook.png',
        majorName: '烘焙与西点'
      }
      , {
        majorImg: 'http://192.168.1.153/Pages/images/global.png',
        majorName: '商学院国际金融'
      }
      , {
        majorImg: 'http://192.168.1.153/Pages/images/it.png',
        majorName: '电脑学院软件工程师'
      }
    ]
  },
  select:function(e){
    this.setData({
      selected: true
    })
  },
  select1:function(e){
    this.setData({
      selected: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})