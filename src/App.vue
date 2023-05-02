<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Aside from './components/aside/the-aside.vue';
import Header from './components/header/the-header.vue';
import Main from './components/main/the-main.vue';
import Footer from './components/footer/the-footer.vue';

import { useWeatherStore } from './stores/weather';

const toggle = ref(false);

const store = useWeatherStore();

const toggleSwitch = (value: boolean): void => {
  toggle.value = value;
};

onMounted(async () => {
  await store.init();
});
</script>

<template>
  <div class="app-wrapper">
    <div :class="toggle ? 'bg-dark' : ''" @click="() => toggleSwitch(false)"></div>
    <Aside :toggle="toggle" />
    <div class="app-content">
      <Header
        :loading="store.isLoaded"
        :error="store.isError"
        :icon="store.weatherDay.icon"
        :tempt="store.weatherDay.tempt"
        :switchToggle="toggleSwitch"
      />
      <Main
        :loading="store.isLoaded"
        :error="store.isError"
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
  position: relative;
  padding: 20px 0 0;
  display: flex;
}

.app-content {
  flex-grow: 1;
}

.bg-dark {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
