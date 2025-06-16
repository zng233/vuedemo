<script setup>
import axios from "axios";
import Navigation from "@/components/navigation.vue";
import {NNotificationProvider} from "naive-ui";
import details1 from "@/components/details1.vue";
import Last from "@/components/last.vue";

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
<!--      <Navigation/>-->
      <div class="router-view">
<!--        <router-view/>-->
        <details1/>
      </div>
      <!--      <Menubar/>-->
      <!--      <hot/>-->
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
