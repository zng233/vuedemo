<template>
  <div class="cart-container">
    <n-card class="cart-card">
      <div class="cart-header">
        <h2>购物车</h2>
        <n-button size="small" type="info" @click="clearCart">清空购物车</n-button>
      </div>

      <n-empty v-if="cartItems.length === 0" description="购物车空空如也">
        <n-button size="small" @click="router.push('/')">
          去逛逛
        </n-button>
      </n-empty>

      <div v-else>
        <n-scrollbar style="max-height: 60vh">
          <n-list bordered>
            <n-list-item v-for="item in cartItems" :key="item.id" class="cart-item">
              <div class="item-content">
                <div class="item-image">
                  <img :src="item.url" alt="">
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <div class="item-price">¥{{ item.price }}</div>
                  <div class="item-actions">
                    <n-button-group>
                      <n-button @click="reducequantity(item)">
                        <template #icon>
                          <n-icon>
                            <minus/>
                          </n-icon>
                        </template>
                      </n-button>
                      <n-button>{{ item.quantity }}</n-button>
                      <n-button @click="addquantity(item)">
                        <n-icon>
                          <plus/>
                        </n-icon>
                      </n-button>
                    </n-button-group>
                    <n-button size="small" type="error" @click="removeItem(item)">
                      删除
                    </n-button>
                  </div>
                </div>
              </div>
            </n-list-item>
          </n-list>
        </n-scrollbar>

        <div class="cart-summary">
          <div class="summary-row">
            <span>商品总数</span>
            <span>{{ totalItems }}件</span>
          </div>
          <div class="summary-row">
            <span>商品总价</span>
            <span class="total-price">¥{{ totalPrice }}</span>
          </div>
          <n-button
              class="checkout-btn"
              size="large"
              type="primary"
              @click="checkout"
          >
            去结算
          </n-button>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useRouter} from 'vue-router'
import {
  NButton, NCard, NList, NListItem, NEmpty, NScrollbar, NButtonGroup, NIcon,
  useNotification
} from 'naive-ui'


const router = useRouter()
const Notification = useNotification()

// 购物车数据
const cartItems = ref([
  {
    id: 1,
    name: 'MateBook X Pro',
    url: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202403/gbom/6942103117060/800_800_B0E613B07478197CE91F1E1D61F3FCB1mp.png',
    price: 9999,
    quantity: 1
  },
  {
    id: 2,
    name: 'Watch GT 4',
    url: 'https://2e.zol-img.com.cn/product/256_320x240/384/ce9AbzHCFje8Q.jpg',
    price: 1499,
    quantity: 2
  },
  {
    id: 3,
    name: 'MatePad Pro',
    url: 'https://dlcdnwebimgs.asus.com.cn/gain/1DB8FC36-4B60-42A7-A391-2CA705EE315F/w717/h525/w273',
    price: 3999,
    quantity: 1
  }
])

// 总数
const totalItems = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0)
})

// 总价
const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

// 增加数量
const addquantity = (item) => {
  item.quantity++
}

// 减少数量
const reducequantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  } else {
    removeItem(item)
  }
}

// 移除商品
const removeItem = (item) => {
  cartItems.value = cartItems.value.filter(i => i.id !== item.id)
  Notification.success({
    title: '成功',
    content: `已移除 ${item.name}`,
    duration: 1500
  })
}

// 清空购物车
const clearCart = () => {
  cartItems.value = []
  Notification.success({
    title: '成功',
    content: '购物车已清空',
    duration: 1500
  })
}

// 去结算
const checkout = () => {
  router.push('/checkout')
}

</script>

<style scoped>
.cart-container {
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}

.cart-card {
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.cart-item {
  padding: 15px 0;
}

.item-content {
  display: flex;
  width: 100%;
}

.item-image {
  width: 120px;
  height: 120px;
  margin-right: 20px;
  border-radius: 8px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-info h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.item-price {
  font-size: 18px;
  font-weight: bold;
  color: #e4393c;
  margin: 8px 0;
}

.item-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-summary {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
}

.total-price {
  font-size: 20px;
  font-weight: bold;
  color: #e4393c;
}

.checkout-btn {
  width: 100%;
  margin-top: 20px;
  height: 50px;
  font-size: 18px;
}
</style>