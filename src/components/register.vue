<template>
    <n-card class="card">
      <n-form>

        <n-form-item class="n-form-item" label="用户名" path="username">
          <n-input v-model:value="username" class="n-input" placeholder="请输入用户名"/>
        </n-form-item>

        <n-form-item class="n-form-item" label="电子邮件" path="email">
          <n-input v-model:value="email" class="n-input" path="email" placeholder="请输入电子邮件"/>
        </n-form-item>

        <n-form-item class="n-form-item" label="密码" path="password">
          <n-input v-model:value="password" class="n-input" path="password" placeholder="请输入密码"/>
        </n-form-item>

        <n-form-item class="n-form-item">
          <n-button class="n-button" type="primary" @click="handleSubmit">注册</n-button>
        </n-form-item>

      </n-form>
    </n-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NCard,NForm,NFormItem,NInput,NButton,useNotification } from 'naive-ui'

const username = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()
const Notification = useNotification()

const handleSubmit = () => {
  // 在此处处理表单提交逻辑，例如发送请求到后端
  console.log('用户名:', username.value)
  console.log('电子邮件:', email.value)
  console.log('密码:', password.value)
  localStorage.setItem('username', username.value)
  localStorage.setItem('email', email.value)
  localStorage.setItem('password', password.value)
  Notification.success({
    title: '注册成功',
    content: '嘻嘻'
  })
  router.push('/carousel')
}
</script>

<style scoped>
.card {
  width: 20vw;
  height: 40vh;
  background-color: #ffc107;
}


</style>
