<script lang="ts" setup>
import {ref} from "vue";
import {NFlex, NButton} from "naive-ui";

const footerSections = ref([
  {
    title: "服务支持",
    links: [
      {text: "售后政策", url: "#"},
      {text: "自助服务", url: "#"},
      {text: "维修网点", url: "#"}
    ]
  },
  {
    title: "购物相关",
    links: [
      {text: "支付方式", url: "#"},
      {text: "配送服务", url: "#"},
      {text: "退换货政策", url: "#"}
    ]
  },
  {
    title: "关于我们",
    links: [
      {text: "公司介绍", url: "#"},
      {text: "新闻中心", url: "#"},
      {text: "加入我们", url: "#"}
    ]
  },
  {
    title: "关注我们",
    links: [
      {text: "新浪微博", url: "#"},
      {text: "微信公众号", url: "#"}
    ]
  }
]);

</script>

<template>
  <div class="footer">
    <div class="footer-content">
      <div v-for="(section, index) in footerSections" :key="index" class="footer-section">
        <h4>{{ section.title }}</h4>
        <n-flex v-for="(link, i) in section.links" :key="i" vertical>
          <n-button class="buttton" quaternary>
            {{ link.text }}
          </n-button>
        </n-flex>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #808080;
  color: white;
  padding: 3px 5%;
  margin-top: 5px;
}

.footer-content {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.footer-section h4 {
  font-size: 20px;
  margin: 15px;
  color: #ccc;
}

.buttton {
  font-size: 16px;
  color: #ccc;
}
</style>