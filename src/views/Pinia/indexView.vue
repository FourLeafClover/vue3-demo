<template>
  <div class="home">
    <Products ref="product"></Products>
    <Cart></Cart>
  </div>
</template>

<script lang="ts" setup>
import Products from './Products.vue'
import Cart from './Cart.vue'
import { onMounted, ref } from 'vue'
const product = ref<InstanceType<typeof Products>>()
onMounted(() => {
  console.log(product.value?.cartStore.products.length)
})
</script>
