<script setup>
import {NButton} from 'naive-ui'
</script>

<template>
  <div class="nav">
    <n-space>
      <n-button class="left" type="primary">
        Primary
      </n-button>
      <n-button tertiary type="info">
        <router-link to="/register">
          注册
        </router-link>
      </n-button>
      <n-button tertiary type="info">
        登录
      </n-button>
    </n-space>
    <router-view/>
  </div>
</template>

<style scoped>
/* 导航栏 */
.nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 50px;
}

.left {
  order: -1;
}

</style>