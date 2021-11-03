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
    actvieClass: "menuActive menu",
    notActiveClass: "meun"

  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectMenu(event) {
      console.log(event);
      console.log(event.target.dataset);
    }
  }
})