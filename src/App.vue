<script setup>
import axios from "axios";
import Navigation from "@/components/navigation.vue";
import Carousel from "@/components/Carousel.vue";
import Menubar from "@/components/menubar.vue";
import Goods from "@/components/template/goods.vue";
import Hot from "@/components/hot.vue";
import last from "@/components/last.vue";

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
  <div class="container">
    <Navigation/>
    <router-view/>
    <Menubar/>
    <hot/>
    <last/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
}
</style>
