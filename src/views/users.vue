<template>
  <div class="top">
      <h1>用户管理</h1>
      <el-table
    :data="items"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="created_at"
      label="创建时间"
    >
    </el-table-column>
    <el-table-column
      prop="money"
      label="钱包余额"
      width="180">
    </el-table-column>
  </el-table>
    <router-view></router-view>
    <el-pagination @current-change="handleCurrentChange"  layout="prev, pager, next" :total="50">
    </el-pagination>
  </div>
  
</template>

<script type="es6">
import { getUsersUrl } from "../api/api";
export default {
  data() {
    return {
      items: [
        {
          id: "2016-05-03",
          name: "王小虎",
          created_at: "上海市普陀区金沙江路 1518 弄",
          money: "10"
        },
        {
          id: "2016-05-03",
          name: "王小虎",
          created_at: "上海市普陀区金沙江路 1518 弄",
          money: "10"
        },
        {
          id: "2016-05-03",
          name: "王小虎",
          created_at: "上海市普陀区金沙江路 1518 弄",
          money: "10"
        },
        {
          id: "2016-05-03",
          name: "王小虎",
          created_at: "上海市普陀区金沙江路 1518 弄",
          money: "10"
        },
        {
          id: "2016-05-03",
          name: "王小虎",
          created_at: "上海市普陀区金沙江路 1518 弄",
          money: "10"
        },
        {
          id: "2016-05-03",
          name: "王小虎",
          created_at: "上海市普陀区金沙江路 1518 弄",
          money: "10"
        },
        {
          id: "2016-05-03",
          name: "王小虎",
          created_at: "上海市普陀区金沙江路 1518 弄",
          money: "10"
        }
      ],
      pagination: {
        current_page: 1,
        per_page: 10,
        total: 0,
        total_pages: 0
      }
    };
  },
  methods: {
    getItems() {
      let obj = {
        params: {
          page: this.pagination.current_page,
          page_size: this.pagination.per_page
        }
      };
      getUsersUrl(obj).then(res => {
        (this.items = res.data.data),
          (this.pagination = res.data.meta.pagination);
      });
    },
    handleCurrentChange(value) {
      (this.pagination.current_page = value), this.items();
    }
  },
  mounted() {
    this.getItems();
  }
};
</script>

<style>
.top {
  padding: 10px;
}
</style>