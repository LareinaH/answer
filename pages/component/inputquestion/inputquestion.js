// pages/component/inputquestion/inputquestion.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  

  },

  /**
   * 组件的初始数据
   */
  data: {
    question:"1+1=？",
    answer:"2",
    inputValue:"",
    score:"100",
    showRedpackage:false,
    showErrorMsg:false,
    finishend:false
  },

  /**
   * 组件的方法列表
   */
  methods: {

    bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
    },

    butClik: function(e){

      if(this.data.inputValue === this.data.answer){
        this.setData({
          showRedpackage:true,
          finishend:true,
        });
      }else{
        this.setData({
          showErrorMsg:true,
          finishend:true,
        });
      }
       

    }
  }

})