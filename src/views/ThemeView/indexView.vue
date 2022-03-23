<template>
  <div class="theme">
    <div class="text">hello</div>
    <button @click="changeTheme('red')">红色</button>
    <button @click="changeTheme('blue')">蓝色</button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const theme = ref('red')

const changeTheme = (color: string) => {
  theme.value = color
}
</script>
<style lang="less" scoped>
.text {
  color: v-bind(theme);
}
</style>
