<script setup>
import {NFlex} from "naive-ui";
import Goods from "@/components/template/goods.vue";
</script>

<template>
  <div class="bar">
    <n-flex align="center" class="hot-title" justify="center">
      <h2>热销商品</h2>
    </n-flex>
    <n-flex align="center" class="hot" justify="space-evenly" wrap="wrap">
      <goods
          imgurl="https://res.vmallres.com/pimages/uomcdn/CN/pms/202403/gbom/6942103117060/800_800_B0E613B07478197CE91F1E1D61F3FCB1mp.png"
          name="MateBook X Pro" price="￥9999"/>
      <goods
          imgurl="https://2e.zol-img.com.cn/product/256_320x240/384/ce9AbzHCFje8Q.jpg"
          name="Watch GT 4" price="￥1499"/>
      <goods
          imgurl="https://dlcdnwebimgs.asus.com.cn/gain/1DB8FC36-4B60-42A7-A391-2CA705EE315F/w717/h525/w273"
          name="MatePad Pro" price="￥3999"/>
    </n-flex>

    <n-flex align="center" class="hot-title" justify="center">
      <h2>为您推荐</h2>
    </n-flex>
    <n-flex align="center" class="hot" justify="space-evenly" wrap="wrap">
      <goods
          imgurl="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1603261841.90278930.jpg"
          name="智能积木 猎户座六足泰坦" price="￥479"/>
      <goods
          imgurl="https://2e.zol-img.com.cn/product/256_320x240/384/ce9AbzHCFje8Q.jpg"
          name="Xiaomi全屋路由 BE3600Pro 套装" price="￥1499"/>
      <goods
          imgurl="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1572939589.21071305.jpg"
          name="工程挖掘机" price="￥199"/>
    </n-flex>

    <n-flex align="center" class="hot-title" justify="center">
      <h2>猜你需要</h2>
    </n-flex>
    <n-flex align="center" class="hot" justify="space-evenly" wrap="wrap">
      <goods
          imgurl="https://p2.lefile.cn/product/adminweb/2025/04/28/TkbovMh7JH4o7Xo3Kmf8mNlxW-0419.jpg"
          name="联想拯救者Y9000P" price="￥29400"/>
      <goods
          imgurl="https://dlcdnwebimgs.asus.com.cn/gain/E17607E8-B0AA-41B4-AFE2-8F30F0899C3E/w1000/h732"
          name="ROG 魔霸9" price="￥13999"/>
      <goods
          imgurl="https://dlcdnwebimgs.asus.com.cn/gain/1DB8FC36-4B60-42A7-A391-2CA705EE315F/w717/h525/w273"
          name="ROG 幻X 2025" price="暂无库存"/>
    </n-flex>

    <n-flex align="center" class="hot-title" justify="center">
      <h2>为您推荐</h2>
    </n-flex>
    <n-flex align="center" class="hot" justify="space-evenly" wrap="wrap">
      <goods
          imgurl="https://se-cdn.djiits.com/tpc/uploads/carousel/image/ab8a2879aa665f95bd1dfba291fb6919@ultra.webp"
          name="DJI Mavic 4 Pro(DJI RC 2)" price="￥13888"/>
      <goods
          imgurl="https://se-cdn.djiits.com/tpc/uploads/carousel/image/560f1b92810c859a4ab02fdf9195d052@ultra.webp"
          name="DJI Flip 畅飞套装（带屏遥控器）" price="￥4988"/>
      <goods
          imgurl="https://se-cdn.djiits.com/tpc/uploads/carousel/image/1276223e490de399f4caccdf5e349311@ultra.webp"
          name="Osmo Mobile 7P" price="￥799"/>
    </n-flex>
  </div>
</template>

<style scoped>
.bar {
  width: 100%;
  margin: 0 auto;
}

.bar h2 {
  margin-bottom: 20px;
}

</style>