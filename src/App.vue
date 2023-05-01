<script setup lang="ts">
import { onMounted } from 'vue';
import Aside from './components/aside/the-aside.vue';
import Header from './components/header/the-header.vue';
import Main from './components/main/the-main.vue';
import Footer from './components/footer/the-footer.vue';

import { useWeatherStore } from './stores/weather';

const store = useWeatherStore();

onMounted(async () => {
  await store.init();
});
</script>

<template>
  <div class="app-wrapper">
    <Aside />
    <div class="app-content">
      <Header :icon="store.weatherDay.icon" :tempt="store.weatherDay.tempt" />
      <Main
        :weatherDay="store.weatherDay"
        :weatherHourly="store.weatherHourly"
        :weatherDaily="store.weatherDaily"
      />
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
  gap: 50px;
}

.app-content {
  flex-grow: 1;
}
</style>
