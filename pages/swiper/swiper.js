Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:[
      "../../images/p1.png",
      "../../images/p2.png",
      "../../images/p3.png",
      "../../images/p4.png",
    ],
    indicatorDots:true,
    vertical:false,
    autoplay:false,
    interval:3000,
    duration:1200
  },
  changeIndicatorDots:function(e) {
    this.setData({
      indicatorDots:!this.data.indicatorDots
    }) 
  },
  changeVertical:function(e) {
    this.setData({
      vertical:!this.data.vertical
    })
  },
  changeAutoplay:function(e) {
    this.setData({
      autoplay:!this.data.autoplay
    })
  },
  intervelChange:function(e) {
    this.setData({
      interval:e.detail.value
    })
  },
  durationChange:function(e) {
    this.setData({
      duration:e.detail.value
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