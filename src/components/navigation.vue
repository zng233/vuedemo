<template>
  <div class="nav">
    <div class="nav-left">
      <!--          <n-button type="primary">-->
      <!--            Primary-->
      <!--          </n-button>-->
    </div>
    <div class="nav-right">
      <n-button tertiary type="info">
        <router-link to="/">
          主页
        </router-link>
      </n-button>
      <n-button tertiary type="info">
        <router-link to="/register">
          注册
        </router-link>
      </n-button>
      <n-button tertiary type="info">
        <router-link to="/login">
          登录
        </router-link>
      </n-button>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 50px;
}

.nav-left {
  flex: 1;
}

.nav-right {
  display: flex;
  gap: 8px;
  margin-right: 100px;
}

.router-link-active {
  text-decoration: none;
  color: blue;
}
</style>
<script setup>
import {NButton} from 'naive-ui';
</script>