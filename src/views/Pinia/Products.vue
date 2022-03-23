<template>
  <div class="shop-products">
    <div
      class="product-item"
      v-for="product in store.products"
      :key="product.id"
    >
      {{ product.name }}-{{ product.price }}
      <button @click="cartStore.addCart(product.id)">添加购物车</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineExpose } from 'vue'
import { userCartStore } from '@/store/cart'
import { userShopStore } from '@/store/shop'
const store = userShopStore()
const cartStore = userCartStore()
defineExpose({
  cartStore
})
</script>
