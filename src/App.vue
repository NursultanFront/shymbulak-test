<script setup lang="ts">
import { RouterView } from 'vue-router';
import axios from 'axios';
import { onBeforeMount } from 'vue';

import AsideApp from '@/components/AsideApp.vue';

onBeforeMount(() => {
  const res = axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${import.meta.env.VITE_API_LAT}&lon=${
      import.meta.env.VITE_API_LON
    }&appid=${import.meta.env.VITE_API_KEY}`
  );
  console.log(res);
});
</script>

<template>
  <AsideApp />
</template>

<style scoped></style>
