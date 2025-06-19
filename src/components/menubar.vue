<script setup>
import {NDropdown, NButton, NFlex} from "naive-ui";

const phone = [
  {
    label: '小米',
    key: '0'
  },
  {
    label: 'vivo',
    key: '1'
  },
  {
    label: '华为',
    key: '2'
  }
];

const computer = [
  {
    label: '联想',
    key: '0'
  },
  {
    label: '华硕',
    key: '1'
  },
  {
    label: '戴尔',
    key: '2'
  }
];

const devices = [
  {
    label: '米家空气净化器',
    key: '0'
  },
  {
    label: '华为路由器',
    key: '1'
  },
  {
    label: '米家智能插座',
    key: '2'
  }
];
const handleSelect = (key) => {
  console.log(key);
};
</script>

<template>

  <n-flex align="center" class="menubar" justify="center">
    <n-dropdown :options="phone" trigger="hover" @select="handleSelect">
      <n-button class="n-button">智能手机</n-button>
    </n-dropdown>
    <n-dropdown :options="computer" trigger="hover" @select="handleSelect">
      <n-button class="n-button">智能电脑</n-button>
    </n-dropdown>
    <n-dropdown :options="devices" trigger="hover" @select="handleSelect">
      <n-button class="n-button">智能设备</n-button>
    </n-dropdown>
    <n-dropdown trigger="hover">
      <n-button class="n-button">无人机</n-button>
    </n-dropdown>
  </n-flex>
</template>

<style scoped>
.menubar {
  width: 100%;
  height: 150px;
  margin-top: 1px;
  background-color: white;
}

.n-button {
  width: 150px;
  height: 50px;
  font-size: 20px;
}
</style>