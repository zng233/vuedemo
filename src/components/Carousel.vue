<script setup>
import {ref} from 'vue';
import {NCarousel} from 'naive-ui';

// const slides = ref([
//      {
//        image: "https://pic.nximg.cn/file/20230608/34755942_174625844109_2.jpg",
//        alt: "Banner 1"
//      },
//      {
//        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
//        alt: "Banner 2"
//      },
//      {
//        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
//        alt: "Banner 3"
//      }
//    ]);

</script>

<template>
    <n-carousel autoplay show-arrow class="carousel">
      <img
          class="carousel-img"
          src="https://tse3-mm.cn.bing.net/th/id/OIP-C.7cd_vQzfAxxJdNVeL7FLiwHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      >
      <img
          class="carousel-img"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
      >
      <img
          class="carousel-img"
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80"
      >
    </n-carousel>
</template>

<style scoped>
  .carousel {
    margin: auto;
    width: 90%;
    height: 800px; /* 设置轮播图高度 */
    overflow: hidden; /* 隐藏溢出内容 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #007bff;
  }
  .carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
</style>