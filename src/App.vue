<script setup>
import axios from "axios";
import Navigation from "@/components/navigation.vue";
import Menubar from "@/components/menubar.vue";
import Hot from "@/components/hot.vue";
import last from "@/components/last.vue";
import { NNotificationProvider } from "naive-ui";

getList()

async function getList() {
  const res = await axios({
    url: "https://q6zv39.laf.run/get_list",
    method: "get",
  })

  console.log(res);
}
</script>

<template>
  <n-notification-provider>
    <div class="container">
      <Navigation/>
      <div class="router-view">
        <router-view/>
      </div>
      <Menubar/>
      <hot/>
      <last/>
    </div>
  </n-notification-provider>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
}
.router-view {
  display: flex;
  justify-content: center;
}
</style>
