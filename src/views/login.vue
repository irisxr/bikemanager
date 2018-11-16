<template>
  <el-card class="box-card" style="width:440px;margin:220px auto">
  <div slot="header" class="clearfix">
    <span>用户登录页面</span>
  </div>
   <el-form :model="loginForm" ref="loginFormRefs" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="username"
    label="账号"
    :rules="[
      { required: true, message: '请输入账号', trigger: 'blur' },
    ]"
  >
    <el-input v-model="loginForm.username"></el-input>
  </el-form-item>

  <el-form-item
    prop="password"
    label="密码"
    :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
    ]"
  >
    <el-input v-model="loginForm.password" type="password"></el-input>
  </el-form-item>
<el-button type="primary" @click="submitForm(loginFormRefs)">登陆</el-button>
</el-form>
 </el-card>
</template>

<script>
import { loginUserUrl } from "../api/api";
import axios from "axios";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(loginFormRefs) {
      if ((this.loginForm.username == "aaa") & (this.loginForm.password == "123456")) {
        this.$router.push({ path: "/home" });
      } else {
        alert("用户名或密码错误");
      }
      //   this.$refs[formName].validate(valid => {
      //     if (valid) {
      //       const data = {
      //         username: this.loginForm.username,
      //         password: this.loginForm.password,
      //         grant_type: "password",
      //         client_id: 2,
      //         client_secret: "yZ5dvsvwSJPJNo3HcmkoYtZ4asdwBy1Ae640V50r"
      //       };
      //       loginUserUrl(data).then(res => {
      //         sessionStorage.setItem("ak", res.data.access_token);
      //         axios.defaults.headers.common["Authorization"] =
      //           "Bearer" + res.data.access_token;
      //         this.$router.push({ path: "/home" });
      //       });
      //     } else {
      //       console.log("error submit");
      //       return false;
      //     }
      //   });
    }
  },
  mounted() {}
};
</script>

<style>
</style>