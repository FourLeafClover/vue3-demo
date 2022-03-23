<template>
  <div class="slot">
    <SlotView :items="items">
      <template v-slot:default="slotProps">
        <div>
          {{ slotProps.item.text }}
        </div>
      </template>
    </SlotView>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import SlotView from './slotView.vue'
const items = ref([
  {
    text: 1
  },
  {
    text: 2
  },
  {
    text: 3
  },
  {
    text: 4
  }
])
</script>
