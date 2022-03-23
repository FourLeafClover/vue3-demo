<template>
  <div class="child-1">
    <button @click="onClick">child-1点击</button>
    <ChildTwo></ChildTwo>
  </div>
</template>
<script lang="ts" setup>
import ChildTwo from './ChildTwo.vue'
import { defineEmits, defineProps, withDefaults } from 'vue'
interface Props {
  name: string;
}
const props = withDefaults(defineProps<Props>(), {
  name: 'test'
})

const emit = defineEmits<{(e: 'click', val: string): void }>()

const onClick = () => {
  emit('click', props.name + '被点击了')
}
</script>
