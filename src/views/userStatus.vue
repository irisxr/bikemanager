<template>
  <div>
    <div style="width:100%;height:400px" id="userChart"></div> 
  </div>
</template>

<script type="es6">
import { getUserDataUrl } from "../api/api";
import echarts from "echarts";
export default {
  data() {
    return {
      item: [],
      charLine: null
    };
  },
  methods: {
    getUserCharts() {
      getUserDataUrl().then(res => {
        this.item = res.data;
        this.drawLineData();
      });
    },
    drawLineData() {
      this.charLine = echarts.init(document.getElementById("userChart"));
      this.charLine.setOption({
        title: {
          text: "用户统计"
        },
        xAxis: {
          type: "category",
          name: "日期",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        yAxis: {
          type: "value",
          name: "用户量"
        },
        series: [
          {
            name: "userChart",
            type: "line",
            data: [5, 12, 34, 23, 32, 11, 24, 42, 10, 30]
          }
        ]
      });
    }
  },
  mounted() {
    this.getUserCharts();
  }
};
</script>

<style>
</style>