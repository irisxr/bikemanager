<template>
  <div class="top">
    <h1>单车管理</h1>
  <el-table
    :data="tableData3"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="编号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="longitude"
      label="经度"
      width="300">
    </el-table-column>
    <el-table-column
      prop="latitude"
      width="300"
      label="纬度">
    </el-table-column>
     <el-table-column
     width="200"
      label="二维码">
      <template slot-scope="scope">
          <img src="@/assets/qr_code.jpg" width="80" height="80"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="action"
      label="操作">
      <template slot-scope="scope">
          <router-link :to="{path:'/bikesDetail'}">
             <el-button  size="small">查看</el-button>
          </router-link>
        <el-button type="danger" size="small" @click="handleDelete(scope.$index,tableData3)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <router-view></router-view>
  <el-pagination @current-change="handleCurrentChange"  layout="prev, pager, next" :total="50">
    </el-pagination>
  </div>
</template>

<script type="es6">
import { getBikesUrl, deleteBikesDetailUrl } from "../api/api";
export default {
  data() {
    return {
      tableData3: [
        {
          id: "1",
          longitude: "东经23度",
          latitude: "北纬100度"
        },
        {
          id: "2",
          longitude: "东经23度",
          latitude: "北纬100度"
        },
        {
          id: "3",
          longitude: "东经23度",
          latitude: "北纬100度"
        },
        {
          id: "4",
          longitude: "东经23度",
          latitude: "北纬100度"
        },
        {
          id: "5",
          longitude: "东经23度",
          latitude: "北纬100度"
        },
        {
          id: "6",
          longitude: "东经23度",
          latitude: "北纬100度"
        },
        {
          id: "7",
          longitude: "东经23度",
          latitude: "北纬100度"
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
    handleDelete(index) {
      this.tableData3.splice(index, 1);
    },
    getBikes() {
      let obj = {
        params: {
          page: this.pagination.current_page,
          page_size: this.pagination.per_page
        }
      };
      getBikesUrl(obj).then(res => {
        (this.tableData3 = res.data.data),
          (this.pagination = res.data.meta.pagination);
      });
    },
    handleCurrentChange(value) {
      (this.pagination.current_page = value), this.getBikes();
    }
    // handleDelete(res) {
    //   deleteBikesUrl(res).then(res => {
    //     this.getBikes();
    //   });
    // }
  },
  mounted() {
    this.getBikes();
  }
};
</script>

<style>
.top {
  padding: 10px;
}
</style>
