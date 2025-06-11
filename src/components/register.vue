<script lang="ts" setup>
import "@/css/all.css"
import Navigation from "@/components/navigation.vue";
import {NButton} from "naive-ui";
// document
//     .getElementById("reg")
//     .addEventListener("click", function (event) {
//       event.preventDefault();
//       const username = document.getElementById("username").value;
//       const password = document.getElementById("password").value;
//
//       if (!username || !password) {
//         alert("账号和密码不能为空！");
//         return;
//       }
//
//       localStorage.setItem("username", username);
//       localStorage.setItem("password", password);
//       alert("注册成功！");
//       console.log("存储的数据：", { username, password });
//       window.location.href = "login.html";
//     });
</script>

<template>
  <div>
    <navigation/>
    <div class="container">
      <div class="container">
        <h3>欢迎-注册</h3>
        <div class="alert" role="alert">提示消息</div>
        <div class="form_wrap">
          <form class="login-form">
            <div class="mb-3">
              <label class="form-label" for="username">账号</label>
              <n-input id="username" name="username" placeholder="账号"
                       type="text"/>
            </div>
            <div class="mb-3">
              <label class="form-label" for="password">密码</label>
              <input id="password" class="form-control password" name="password" type="password"/>
            </div>
            <div class="button1">
              <button id="reg" class="btn btn-primary btn-login" type="button">
                注 册
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>