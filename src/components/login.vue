<template>
  <n-card class="card">
    <n-form>

      <n-form-item class="n-form-item" label="用户名" path="username">
        <n-input v-model:value="username" class="n-input" placeholder="请输入用户名"/>
      </n-form-item>

      <n-form-item class="n-form-item" label="密码" path="password">
        <n-input v-model:value="password" class="n-input" type="password" placeholder="请输入密码"/>
      </n-form-item>

      <n-form-item class="n-form-item">
        <n-button class="n-button" type="primary" @click="handleLogin">登录</n-button>
      </n-form-item>

    </n-form>
  </n-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NForm, NFormItem, NInput, NButton, NCard, useNotification } from 'naive-ui'

const username = ref('')
const password = ref('')
const router = useRouter()
const Notification = useNotification()

const handleLogin = () => {
  const storedUsername = localStorage.getItem('username')
  const storedPassword = localStorage.getItem('password')

  if (username.value === storedUsername && password.value === storedPassword) {
    Notification.success({
      title: '登录成功',
      content: '欢迎回来！'
    })
    router.push('/')
  } else {
    Notification.error({
      title: '登录失败',
      content: '用户名或密码错误'
    })
  }
}
</script>

<style scoped>
.card {
  width: 20vw;
  height: 30vh;
}
</style>
