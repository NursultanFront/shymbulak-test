<script setup lang="ts">
import { RouterView } from 'vue-router';

import Aside from './components/aside/the-aside.vue';
import Header from './components/header/the-header.vue';
import Main from './components/main/the-main.vue';
</script>

<template>
  <div class="app-wrapper">
    <Aside />
    <div class="app-content">
      <Header />
      <Main />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
}

.app-content {
  flex-grow: 1;
}
</style>
