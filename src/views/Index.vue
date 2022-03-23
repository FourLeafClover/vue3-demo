<template>
  <div class="index">
    <div class="page-list">
      <a
        href="javascript:;"
        class="page-item"
        v-for="page in pages"
        :key="page.name"
        @click="router.push(page)"
      >
        {{ page.meta.title }}
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const pages = ref(router.getRoutes())
</script>
<style lang="less" scoped>
.page-list {
  a {
    display: inline-block;
    margin-right: 10px;
  }
}
</style>
