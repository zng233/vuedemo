<script setup>
import {NCarousel, NFlex, NDescriptions} from "naive-ui";
import {ref} from 'vue';
import router from "@/components/router.js";

const selectedColor = ref('白沙银');
const selectedVersion = ref('12GB+512GB');
const handleColorSelect = (color) => {
  selectedColor.value = color;
  console.log(`选中颜色: ${selectedColor.value}`);
};
const handleVersionSelect = (version) => {
  selectedVersion.value = version;
  console.log(`选中版本: ${selectedVersion.value}`);
};
</script>

<template>
  <div class="flex">
    <div class="left">
      <n-carousel autoplay class="carousel">
        <img
            class="carousel-img"
            src="https://res2.vmallres.com/pimages/FssCdnProxy/vmall_product_uom/pmsSalesFile/428_428_447843972C424185C0189715B1BBFCFB.jpg"
        >
        <img
            class="carousel-img"
            src="https://res2.vmallres.com/pimages/FssCdnProxy/vmall_product_uom/pmsSalesFile/428_428_82306C5CB4D51C694AFAF21E39AFB437.png"
        >
        <img
            class="carousel-img"
            src="https://res2.vmallres.com/pimages/FssCdnProxy/vmall_product_uom/pmsSalesFile/428_428_7AA9465982C4CC3C5615F2AF98B5FF1D.png"
        >
        <img
            class="carousel-img"
            src="https://res2.vmallres.com/pimages/FssCdnProxy/vmall_product_uom/pmsSalesFile/428_428_ADA5018515E1D00B15AF544866BEFBD8.png"
        >
      </n-carousel>
    </div>
    <div class="right">
      <div class="product-info">
        <h1 class="product-title">MateBook X Pro</h1>
        <div class="price-section">
          <div class="price">¥9999</div>
          <div class="promotion">限时优惠 立减500元</div>
        </div>

        <div class="config-option">
          <div class="config-title">选择颜色</div>
          <div class="config-buttons">
            <div
                :class="{ selected: selectedColor === '白沙银' }"
                class="config-btn"
                @click="handleColorSelect('白沙银')">
              白沙银
            </div>
            <div
                :class="{ selected: selectedColor === '雅川青' }"
                class="config-btn"
                @click="handleColorSelect('雅川青')">
              雅川青
            </div>
            <div
                :class="{ selected: selectedColor === '南糯紫' }"
                class="config-btn"
                @click="handleColorSelect('南糯紫')">
              南糯紫
            </div>
          </div>

          <div class="config-option">
            <div class="config-title">选择版本</div>
            <div class="config-buttons">
              <div
                  :class="{ selected: selectedVersion === '12GB+512GB' }"
                  class="config-btn"
                  @click="handleVersionSelect('12GB+512GB')">
                12GB+512GB
              </div>
              <div
                  :class="{ selected: selectedVersion === '12GB+1TB' }"
                  class="config-btn"
                  @click="handleVersionSelect('12GB+1TB')">
                12GB+1TB
              </div>
            </div>
          </div>

          <div class="buy-buttons">
            <button class="buy-btn" @click="router.push('/shop')">立即购买</button>
            <button class="buy-btn" @click="router.push('/shop')">加入购物车</button>
          </div>

          <div class="service-promise">
            <div class="service-item">
              次日达服务
            </div>
            <div class="service-item">
              官方保修
            </div>
            <div class="service-item">
              7天无理由退货
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="flex1">
      <div class="left1">
        <div style="font-size: 20px">操作系统</div>
      </div>
      <div class="right2">
        <div style="font-size: 15px;margin-top: 3px">Windows 11 家庭版</div>
      </div>
    </div>

    <div class="flex1">
      <div class="left1">
        <div style="font-size: 20px">操作系统</div>
      </div>
      <div class="right2">
        <div style="font-size: 15px;margin-top: 3px">Windows 11 家庭版</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 73vh;
  margin: 0 auto;
}

.left {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.right {
  width: 50%;
}

.flex1 {
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 20vh;
  margin: 0 auto;
}
.left1 {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.right1 {
  width: 50%;
}

.carousel {
  margin: 5% auto auto;
  width: 90%;
  height: 50vh;
  background-color: #ffc107;
}

.carousel img {
  margin: auto;
  width: 100%;
  height: 100%;
}

.product-info {
  flex: 1;
  padding-left: 30px;

}

.product-title {
  font-size: 24px;
  margin-bottom: 15px;
}

.price-section {
  background: #fff5f5;
  padding: 20px;
  margin: 20px 0;
}

.price {
  color: #e4393c;
  font-size: 36px;
  font-weight: bold;
}

.config-option {
  margin: 15px 0;
}

.config-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.config-buttons {
  display: flex;
  gap: 10px;
}

.config-btn {
  padding: 8px 20px;
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 4px;
}

.config-btn.selected {
  border-color: #e4393c;
  color: #e4393c;
}

/* 购买按钮 */
.buy-buttons {
  margin-top: 30px;
}

.buy-btn {
  background: #e4393c;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  margin-right: 15px;
}

/* 服务承诺 */
.service-promise {
  margin: 30px 0;
  display: flex;
  gap: 30px;
}

.service-item {
  display: flex;
  align-items: center;
}

.service-item img {
  width: 24px;
  margin-right: 8px;
}
</style>