Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:true,
    hidden2:true,
    time:5
  },
  onLoad:function(options) {
    var self = this;
    setInterval(function() {
      var h2 = self.data.hidden2;
      var t = self.data.time;
      if(!h2) {
        t=t-1;
        if(t>0) {
          self.setData({
            time:t
          })
        }
      }
    },1000);
  },
  loadingtap:function(){
    this.setData({
      hidden:true
    })
  },
  loadingTap1:function(){
    this.setData({
      hidden:false
    })
  },
  loadingTap2:function() {
    this.setData({
      hidden2:false,
      time:5
    })
    var self = this
    setTimeout(function() {
      self.setData({
        hidden2:true
      })
    },5000)
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