const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [],
    listCur: {
      "id":1,
      "name":"蔬菜"
    },
    loading: true,
    todayFoodMap:[],
    todayFoodSet:[],
    todayfoods:[]
  },

  // 发送 POST 请求的方法
  getFoodList() {
    const url = "https://oldking.top/family-tools/menu/list"; // 替换为你的接口地址
    // const postData = {
    //   key1: "value1",
    //   key2: "value2",
    // };

    this.setData({ loading: true }); // 开启加载状态

    wx.request({
      url: url,
      method: "GET",
      // data: postData,
      header: {
        "Content-Type": "application/json", // 设置请求头
      },
      success: (res) => {
        console.log("请求成功:", res);
        if (res.statusCode === 200) {
          this.setData({ list: res.data.data });
          wx.showToast({
            title: "加载成功",
            icon: "success",
          });
        } else {
          wx.showToast({
            title: "服务器错误",
            icon: "error",
          });
        }
      },
      fail: (err) => {
        console.error("请求失败:", err);
        wx.showToast({
          title: "请求失败",
          icon: "error",
        });
      },
      complete: () => {
        this.setData({ loading: false }); // 关闭加载状态
      },
    });
  },

  submitFood(e){
    const url = "https://oldking.top/family-tools/menu/add"; // 替换为你的接口地址
    const menuIdsArray = Array.from(this.todayFoodSet);
    const postData = {
      menuIds: menuIdsArray,
    };
    console.log("postData:",postData);
    this.setData({ loading: true }); // 开启加载状态

    wx.request({
      url: url,
      method: "POST",
      data: postData,
      header: {
        "Content-Type": "application/json", // 设置请求头
      },
      success: (res) => {
        console.log("请求成功:", res);
        if (res.statusCode === 200) {
          this.setData({ responseData: res.data });
          wx.showToast({
            title: "加载成功",
            icon: "success",
          });
        } else {
          wx.showToast({
            title: "服务器错误",
            icon: "error",
          });
        }
      },
      fail: (err) => {
        console.error("请求失败:", err);
        wx.showToast({
          title: "请求失败",
          icon: "error",
        });
      },
      complete: () => {
        this.setData({ 
          loading: false,
          todayFoodMap:new Map(),
          todayFoodSet:new Set(),
          todayfoods:[]
         }); // 关闭加载状态
      },
    });
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  onLoad() {
    this.getFoodList();
    this.todayFoodSet = new Set();
    this.todayFoodMap = new Map();
  },
  onReady() {
    // wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 200,
          TabCur: list[i].id
        })
        return false
      }
    }
  },

  gridswitch: function (e) {
    var checkStatus = e.detail.value;
    var foodId = e.currentTarget.dataset.foodid
    if(checkStatus){
      var obj = {}
      obj.id = e.currentTarget.dataset.foodid
      obj.name = e.currentTarget.dataset.foodname
      obj.img = e.currentTarget.dataset.img
      this.todayFoodMap.set(foodId,obj);
      this.todayFoodSet.add(foodId);
    }else{
      this.todayFoodMap.delete(foodId);
      this.todayFoodSet.delete(foodId);
    }
    var foodList = [];
    for (const item of this.todayFoodSet) {
      console.log(item);
      console.log(this.todayFoodMap.get(item));
      foodList.push(this.todayFoodMap.get(item))
    }
    console.log(foodList)
    this.setData({
      gridBorder: e.detail.value,
      todayfoods:foodList
    });
  },
})