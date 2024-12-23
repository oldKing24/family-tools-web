const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [
      {
        "id":0,
        "img":"/pages/images/vegetables.png",
        "name":"蔬菜",
        "foods":[{
          "id" : 217,
          "name" : "上汤娃娃菜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 218,
          "name" : "凉拌木耳",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 219,
          "name" : "凉拌油麦菜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 220,
          "name" : "凉拌莴笋",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 221,
          "name" : "凉拌黄瓜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 222,
          "name" : "包菜炒鸡蛋粉丝",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 223,
          "name" : "地三鲜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 224,
          "name" : "小炒藕丁",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 225,
          "name" : "干锅花菜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 226,
          "name" : "手撕包菜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 227,
          "name" : "拔丝土豆",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 228,
          "name" : "椒盐玉米",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 229,
          "name" : "榄菜肉末四季豆",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 230,
          "name" : "水油焖蔬菜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 231,
          "name" : "洋葱炒鸡蛋",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 232,
          "name" : "炒滑蛋",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 233,
          "name" : "炒茄子",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 234,
          "name" : "炒青菜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 235,
          "name" : "烤茄子",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 236,
          "name" : "白灼菜心",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 237,
          "name" : "糖拌西红柿",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 238,
          "name" : "素炒豆角",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 239,
          "name" : "红烧冬瓜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 240,
          "name" : "红烧茄子",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 241,
          "name" : "脆皮豆腐",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 242,
          "name" : "芹菜拌茶树菇",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 243,
          "name" : "茄子炖土豆",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 244,
          "name" : "茭白炒肉",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 245,
          "name" : "莴笋叶煎饼",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 246,
          "name" : "菠菜炒鸡蛋",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 247,
          "name" : "葱煎豆腐",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 248,
          "name" : "蒲烧茄子",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 249,
          "name" : "虎皮青椒",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 250,
          "name" : "蚝油三鲜菇",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 251,
          "name" : "蚝油生菜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 252,
          "name" : "西红柿炒鸡蛋",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 253,
          "name" : "西红柿豆腐汤羹",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 254,
          "name" : "西葫芦炒鸡蛋",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 255,
          "name" : "话梅煮毛豆",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 256,
          "name" : "酸辣土豆丝",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 257,
          "name" : "金针菇日本豆腐煲",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 258,
          "name" : "陕北熬豆角",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 259,
          "name" : "雷椒皮蛋",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 260,
          "name" : "鸡蛋火腿炒黄瓜",
          "image" : null,
          "type" : 0,
          "tag" : 0
        },
        {
          "id" : 261,
          "name" : "鸡蛋羹",
          "image" : null,
          "type" : 0,
          "tag" : 0
        }]
      },{
        "id":1,
        "img":"/pages/images/meat.png",
        "name":"肉类",
        "foods":[
          {
            "id" : 71,
            "name" : "乡村啤酒鸭",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 72,
            "name" : "冬瓜酿肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 73,
            "name" : "冷吃兔",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 74,
            "name" : "凉拌鸡丝",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 75,
            "name" : "口水鸡",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 76,
            "name" : "可乐鸡翅",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 77,
            "name" : "台式卤肉饭",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 78,
            "name" : "咕噜肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 79,
            "name" : "咖喱肥牛",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 80,
            "name" : "商芝肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 81,
            "name" : "啤酒鸭",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 82,
            "name" : "回锅肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 83,
            "name" : "土豆炖排骨",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 84,
            "name" : "奶酪培根通心粉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 85,
            "name" : "姜炒鸡",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 86,
            "name" : "姜葱捞鸡",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 87,
            "name" : "孜然牛肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 88,
            "name" : "宫保鸡丁",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 89,
            "name" : "小炒肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 90,
            "name" : "小炒鸡肝",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 91,
            "name" : "小炒黄牛肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 92,
            "name" : "小米辣炒肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 93,
            "name" : "小酥肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 94,
            "name" : "尖叫牛蛙",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 95,
            "name" : "尖椒炒牛肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 96,
            "name" : "山西过油肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 97,
            "name" : "带把肘子",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 98,
            "name" : "干煸仔鸡",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 99,
            "name" : "徽派红烧肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 100,
            "name" : "意式烤鸡",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 101,
            "name" : "新疆大盘鸡",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 102,
            "name" : "无骨鸡爪",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 103,
            "name" : "杀猪菜",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 104,
            "name" : "枝竹羊腩煲",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 105,
            "name" : "柱候牛腩",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 106,
            "name" : "梅菜扣肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 107,
            "name" : "椒盐排条",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 108,
            "name" : "水煮牛肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 109,
            "name" : "水煮肉片",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 110,
            "name" : "洋葱炒猪肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 111,
            "name" : "湖南家常红烧肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 112,
            "name" : "湘祁米夫鸭",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 113,
            "name" : "烤鸡翅",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 114,
            "name" : "猪皮冻",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 115,
            "name" : "猪肉烩酸菜",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 116,
            "name" : "番茄红酱",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 117,
            "name" : "瘦肉土豆片",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 118,
            "name" : "白菜猪肉炖粉条",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 119,
            "name" : "糖醋排骨",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 120,
            "name" : "糖醋里脊",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 121,
            "name" : "红烧猪蹄",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 122,
            "name" : "红烧肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 123,
            "name" : "羊排焖面",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 124,
            "name" : "老妈蹄花",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 125,
            "name" : "老式锅包肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 126,
            "name" : "肉饼炖蛋",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 127,
            "name" : "荔枝肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 128,
            "name" : "荷兰豆炒腊肠",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 129,
            "name" : "萝卜炖羊排",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 130,
            "name" : "蒜苔炒肉末",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 131,
            "name" : "血浆鸭",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 132,
            "name" : "西红柿土豆炖牛肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 133,
            "name" : "西红柿牛腩",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 134,
            "name" : "辣椒炒肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 135,
            "name" : "酱排骨",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 136,
            "name" : "酱牛肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 137,
            "name" : "醉排骨",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 138,
            "name" : "青椒土豆炒肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 139,
            "name" : "香干肉丝",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 140,
            "name" : "香干芹菜炒肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 141,
            "name" : "香煎五花肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 142,
            "name" : "香菇滑鸡",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 143,
            "name" : "香辣鸡爪煲",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 144,
            "name" : "鱼香肉丝",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 145,
            "name" : "鱼香茄子",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 146,
            "name" : "麻婆豆腐",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 147,
            "name" : "麻辣香锅",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 148,
            "name" : "黄焖鸡",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 149,
            "name" : "黄瓜炒肉",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 150,
            "name" : "黑椒牛柳",
            "image" : null,
            "type" : 1,
            "tag" : 0
          },
          {
            "id" : 151,
            "name" : "黔式腊肠娃娃菜",
            "image" : null,
            "type" : 1,
            "tag" : 0
          }
        ]
      },
      {
        "id":2,
        "name":"水产",
        "img":"/pages/images/fish.png",
        "foods":[
          {
            "id" : 3,
            "name" : "小龙虾",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 4,
            "name" : "干煎阿根廷红虾",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 5,
            "name" : "油焖大虾",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 6,
            "name" : "混合烤鱼",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 7,
            "name" : "清蒸鲈鱼",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 8,
            "name" : "白灼虾",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 9,
            "name" : "糖醋鲤鱼",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 10,
            "name" : "芥末黄油罗氏虾",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 11,
            "name" : "葱油桂鱼",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 12,
            "name" : "葱烧海参",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 13,
            "name" : "蒜蓉虾",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 14,
            "name" : "蛏抱蛋",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 15,
            "name" : "香煎翘嘴鱼",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 16,
            "name" : "鲤鱼炖白菜",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 17,
            "name" : "鳊鱼炖豆腐",
            "image" : null,
            "type" : 2,
            "tag" : 0
          },
          {
            "id" : 18,
            "name" : "黄油煎虾",
            "image" : null,
            "type" : 2,
            "tag" : 0
          }
        ]
      },{
        "id":3,
        "name":"早餐",
        "img":"/pages/images/breakfast.png",
        "foods":[
          {
            "id" : 20,
            "name" : "吐司果酱",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 21,
            "name" : "太阳蛋",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 22,
            "name" : "微波炉荷包蛋",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 23,
            "name" : "微波炉蛋糕",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 24,
            "name" : "桂圆红枣粥",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 25,
            "name" : "水煮玉米",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 26,
            "name" : "溏心蛋",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 27,
            "name" : "煎饺",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 28,
            "name" : "燕麦鸡蛋饼",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 29,
            "name" : "牛奶燕麦",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 30,
            "name" : "空气炸锅面包片",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 31,
            "name" : "美式炒蛋",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 32,
            "name" : "苏格兰蛋",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 33,
            "name" : "茶叶蛋",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 34,
            "name" : "蒸水蛋",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 35,
            "name" : "蒸花卷",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 36,
            "name" : "蛋煎糍粑",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 37,
            "name" : "金枪鱼酱三明治",
            "image" : null,
            "type" : 3,
            "tag" : 0
          },
          {
            "id" : 38,
            "name" : "鸡蛋三明治",
            "image" : null,
            "type" : 3,
            "tag" : 0
          }
        ]
      },{
        "id":4,
        "name":"主食",
        "img":"/pages/images/rice.png",
        "foods":[
          {
            "id" : 162,
            "name" : "米饭",
            "image" : null,
            "type" : 4,
            "tag" : 0
          },
          {
            "id" : 162,
            "name" : "面条",
            "image" : null,
            "type" : 4,
            "tag" : 0
          }
        ]
      },{
        "id":6,
        "name":"汤类",
        "img":"/pages/images/soup.png",
        "foods":[
          {
            "id" : 162,
            "name" : "勾芡香菇汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 163,
            "name" : "小米粥",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 164,
            "name" : "排骨苦瓜汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 165,
            "name" : "昂刺鱼豆腐汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 166,
            "name" : "玉米排骨汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 167,
            "name" : "生汆丸子汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 168,
            "name" : "番茄牛肉蛋花汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 169,
            "name" : "皮蛋瘦肉粥",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 170,
            "name" : "米粥",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 171,
            "name" : "紫菜蛋花汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 172,
            "name" : "罗宋汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 173,
            "name" : "菌菇炖乳鸽",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 174,
            "name" : "西红柿鸡蛋汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 175,
            "name" : "金针菇汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 176,
            "name" : "银耳莲子粥",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 177,
            "name" : "陈皮排骨汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          },
          {
            "id" : 178,
            "name" : "陈皮排骨汤",
            "image" : null,
            "type" : 6,
            "tag" : 0
          }
        ]
      }
    ],
    listCur: {
      "id":1,
      "name":"蔬菜"
    },
    load: true,
    todayfoods:[]
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
    console.log(e.currentTarget.dataset.foodname)
    console.log(e.detail.value)
    var obj = {}
    obj.name = e.currentTarget.dataset.foodname
    obj.img = e.currentTarget.dataset.img
    let data = this.data.todayfoods;
    data.push(obj)
    this.setData({
      gridBorder: e.detail.value,
      todayfoods: data
    });
  },
})