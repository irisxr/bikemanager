<template>
  <div id="app">
    <el-menu
  :default-active="home" router="true"
  class="el-menu-demo"
  mode="horizontal"
 >
  <el-menu-item index="home">主页</el-menu-item>
  <el-menu-item index="data">管理</el-menu-item>
  <el-menu-item index="status">统计</el-menu-item>  
</el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      home:''
    }
  }
}
</script>

<style>
#app {
 
}
</style>
