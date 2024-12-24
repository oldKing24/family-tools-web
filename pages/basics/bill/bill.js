const app = getApp();
Page({
  data: {
    archivedRecords: [], // 按日期归档的记录
    // [
    //   {
    //     date: "2024-12-24",
    //     records: [
    //       { amount: -20, type: "吃饭", date: "2024-12-24" },
    //       { amount: +100, type: "工资", date: "2024-12-24" },
    //     ],
    //   },
    // ]
    showAddModal: false, // 是否显示弹窗
    newRecord: {
      amount: 0, // 金额
      type: '', // 类型
      date: '', // 日期
    },
    monthlyData: [
      { month: '2024-10', expense: 5400 },
      { month: '2024-11', expense: 5600 },
      { month: '2024-12', expense: 5500 },
    ],
  },

  // 显示弹窗
  showAddModal() {
    this.setData({
      showAddModal: true,
      'newRecord.date': this.getTodayDate(),
    });
  },

  // 隐藏弹窗
  hideAddModal() {
    this.setData({
      showAddModal: false,
    });
  },

  onLoad() {
    this.drawChart();
  },

  // 输入金额
  onInputAmount(e) {
    this.setData({
      'newRecord.amount': parseFloat(e.detail.value),
    });
  },

  // 输入类型
  onInputType(e) {
    this.setData({
      'newRecord.type': e.detail.value,
    });
  },

  // 添加记录
  addRecord() {
    const { newRecord, archivedRecords } = this.data;
    
    // 检查新记录数据是否合法
    if (!newRecord.type || newRecord.amount === 0) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
      });
      return;
    }
    console.log("初始记录:", this.data.archivedRecords);

    console.log("新记录:", this.data.newRecord);

  
    // 深拷贝现有数据，避免直接修改
    const updatedArchivedRecords = JSON.parse(JSON.stringify(archivedRecords));
  
    // 查找是否已有对应日期的分组
    const existingGroupIndex = updatedArchivedRecords.findIndex((group) => group.date === newRecord.date);
  
    if (existingGroupIndex > -1) {
      // 如果已有分组，追加记录
      updatedArchivedRecords[existingGroupIndex].records.push(newRecord);
    } else {
      // 如果没有对应日期的分组，新增分组
      updatedArchivedRecords.push({
        date: newRecord.date,
        records: [newRecord],
      });
    }
  
    // 更新归档记录，按日期降序排序
    updatedArchivedRecords.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    // 更新数据
    this.setData({
      archivedRecords: updatedArchivedRecords,
      showAddModal: false,
      newRecord: { amount: 0, type: '', date: '' }, // 重置新记录
    });
  
    // 调试日志
    console.log("更新后的记录:", updatedArchivedRecords);
  
    wx.showToast({
      title: '添加成功',
      icon: 'success',
    });
  },

  // 获取今天的日期
  getTodayDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },
  drawChart() {
    const data = this.data.monthlyData;
    const ctx = wx.createCanvasContext('monthlyExpenseChart'); // 获取 Canvas 上下文

    const chartWidth = 300; // 图表宽度
    const chartHeight = 200; // 图表高度
    const barWidth = 30; // 柱状图宽度
    const gap = 20; // 柱子之间的间距
    const startX = 50; // 图表起点的 X 坐标
    const startY = chartHeight + 20; // 图表起点的 Y 坐标
    const maxExpense = Math.max(...data.map((item) => item.expense)); // 最大消费金额

    // 绘制 X 轴
    ctx.setStrokeStyle('#666');
    ctx.setLineWidth(2);
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + chartWidth, startY);
    ctx.stroke();

    // 绘制柱状图
    data.forEach((item, index) => {
      const barHeight = (item.expense / maxExpense) * chartHeight;
      const barX = startX + index * (barWidth + gap);
      const barY = startY - barHeight;

      // 绘制柱子
      ctx.setFillStyle('#FF6347'); // 柱子颜色
      ctx.fillRect(barX, barY, barWidth, barHeight);

      // 绘制金额文本
      ctx.setFillStyle('#333');
      ctx.setFontSize(10);
      ctx.fillText(`${item.expense}元`, barX, barY - 5);

      // 绘制月份
      ctx.fillText(item.month, barX, startY + 15);
    });

    ctx.draw(); // 完成绘制
  },
});
