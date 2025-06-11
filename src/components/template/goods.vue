<script setup>
const props = defineProps({
  imgurl: String,
  price: [String, Number],
  name: String
});
</script>

<template>
  <div class='goods'>
    <img :src="props.imgurl">
    <div>{{ props.name }}</div>
    <div>{{ props.price }}</div>
  </div>
</template>

<style scoped>
.goods {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 27%;
  height: 350px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  background-color: #f9f9f9;
}
  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

</style>