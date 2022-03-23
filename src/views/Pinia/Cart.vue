<template>
  <div class="cart-products">
    <div
      class="product-item"
      v-for="product in store.products"
      :key="product.id"
    >
      {{ product.name }}-{{ product.price }}
    </div>
    <div class="total">合计:{{ store.totalPrice }}</div>
    <button @click="() => store.$reset()">清空购物车</button>
  </div>
</template>
<script lang="ts" setup>
import { userCartStore } from '@/store/cart'
import { watch } from 'vue'
import MessageBox from '@/components/MessageBox/index'
const store = userCartStore()
watch(
  () => store.products,
  () => {
    MessageBox.show(`购物车变化了,${store.products.length}`)
    console.log('购物车变化了')
  },
  {
    deep: true
  }
)
</script>
