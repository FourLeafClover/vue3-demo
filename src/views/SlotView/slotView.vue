<template>
  <div class="layout">
    {{ JSON.stringify(items) }}
    <slot v-for="(item, index) in items" :key="index" :item="item"></slot>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

type Item = {
  text: number;
};

type Items = {
  items: Item[];
};

withDefaults(defineProps<Items>(), {
  items: () => []
})
</script>
