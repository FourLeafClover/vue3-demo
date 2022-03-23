<template>
  <div class="message-box-text">
    {{ text }}
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  text: {
    type: String
  }
})
</script>
<style lang="less">
.message-box {
  position: fixed;
  right: 10px;
  top: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 1px 4px #888888;
  .message-box-text {
    line-height: 20px;
    color: black;
    font-size: 16px;
    padding: 0 20px;
  }
}
</style>
