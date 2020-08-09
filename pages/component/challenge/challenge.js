// pages/component/challenge/challenge.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myImage:{
      type:String,
      value:""
    },
    myTitle:{
      type:String,
      value:""
    },
    myToolTip:{
      type:String,
      value:""
    },
    available:{
      type:Boolean,
      value:false
    },
    targetUrl:{
      type:String,
      value:""
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoPage: function(param){
      console.info(this.data.targetUrl);
      wx.navigateTo({
        url:this.data.targetUrl
    })
  }

  },
})
