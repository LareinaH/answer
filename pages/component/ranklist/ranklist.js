// pages/component/rankList/ranklist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"排行榜"
    },
    dataList:{
      type:[],
      value: [
        {img: 'USA', rank: '1',name:"张三",scope:"100"},
        {img: 'USA', rank: '2',name:"李四",scope:"100"},
        {img: 'USA', rank: '3',name:"王五",scope:"100"},
        {img: 'USA', rank: '4',name:"周六",scope:"100"},
      ]
    }

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

  }
})
