<template>
  <div class="child-2">
     {{ message }}
  </div>
</template>
<script lang="ts" setup name="childTwo">
import { inject } from 'vue'
const message = inject('message')
</script>
