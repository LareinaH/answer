// pages/component/selectquestion/selectquestion.js
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
    question:"华盛顿是哪个国家的首都？",
    answer:"A",
    inputValue:"",
    score:"100",
    showRedpackage:false,
    showErrorMsg:false,
    finishend:false,
    items: [
      {value: 'USA', name: '美国',key:"A"},
      {value: 'CHN', name: '中国',key:"B"},
      {value: 'BRA', name: '巴西',key:"C"},
      {value: 'JPN', name: '日本',key:"D"},
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

    radioChange(e) {
      console.log('radio发生change事件，携带key值为：', e.detail.value)

      const items = this.data.items
      for (let i = 0, len = items.length; i < len; ++i) {
        if(items[i].value === e.detail.value){
          items[i].checked = true;
          this.setData({
            inputValue:items[i].key,
          })
        }else{
          items[i].checked = false;
        }

    
      }
  
      this.setData({
        items
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
