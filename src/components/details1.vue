<script setup lang="ts">
import {NCarousel} from "naive-ui";
</script>

<template>
  <div class="flex">
    <div class="left">
      <n-carousel autoplay class="carousel">
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        >
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        >
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        >
        <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
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
            <div class="config-btn selected">白沙银</div>
            <div class="config-btn">雅川青</div>
            <div class="config-btn">南糯紫</div>
          </div>
        </div>

        <div class="config-option">
          <div class="config-title">选择版本</div>
          <div class="config-buttons">
            <div class="config-btn selected">12GB+512GB</div>
            <div class="config-btn">12GB+1TB</div>
          </div>
        </div>

        <div class="buy-buttons">
          <button class="buy-btn">立即购买</button>
          <button class="buy-btn">加入购物车</button>
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
</template>

<style scoped>

.flex{
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
}
.left {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.right {
  width: 30%;
}
.carousel{
  margin: 5% auto auto;
  width: 720px;
  height: 480px;
  background-color: #ffc107;
}
.carousel img{
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