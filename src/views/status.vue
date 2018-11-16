<template>
  <div>
    <el-row gutter="20">
        <el-col :span="4" class="side">
    <el-menu default-active="userStatus" router="true" class="el-menu-vertical-demo">
      <el-menu-item index="userStatus">用户统计</el-menu-item>
      <el-menu-item index="bikeStatus">单车统计</el-menu-item>
      <el-menu-item index="riderStatus">行程统计</el-menu-item>
    </el-menu> 
    </el-col>
    <el-col :span="20">
    <router-view></router-view>
    </el-col>
    </el-row> 
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.side {
  padding: 10px;
}
</style>