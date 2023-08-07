<template>
  <div class="app">
    <div class="menu">
      <div class="menu-item" :class="{ active: r.path === route.path }" v-for="r in allRoutes" :key="r.path" @click="goToMenu(r)">
        {{ r.meta?.title }}
      </div>
    </div>
    <RouterView class="content" />
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const allRoutes = router.getRoutes()

function goToMenu(r: any) {
  router.push(r.path)
}
</script>

<style lang="scss">
.app {
  display: flex;
  height: 100%;
}
.menu {
  flex: 0 0 150px;
  border-right: 1px solid #8e8e8e;
  .menu-item {
    padding: 2px 10px;
    margin: 2px 0;
    cursor: pointer;
    transition: all 0.2s;
    &.active {
      background-color: #8e8e8e;
    }
    &:hover {
      opacity: 0.8;
      background-color: #8e8e8e;
    }
  }
}
.content {
  padding-left: 10px;
  flex: 1;
}
</style>
