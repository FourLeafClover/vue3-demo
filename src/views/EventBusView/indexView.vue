<template>
  <div class="event-bus">
    <ChildOne name="frank" @click="(val) => onClick(val)"></ChildOne>
  </div>
</template>
<script lang="ts" setup>
import { provide } from 'vue'
import ChildOne from './ChildOne.vue'
provide('message', 'hello vue3')
const onClick = (val: string) => {
  console.log(val)
}
</script>
