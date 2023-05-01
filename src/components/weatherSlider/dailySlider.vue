<template>
  <div class="daily">
    <h2 class="daily__title">Прогноз на 10 дней</h2>
    <div class="daily__slider">
      <swiper
        class="mySwiper"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1200': {
            slidesPerView: 10,
            spaceBetween: 10,
          },
        }"
      >
        <swiper-slide v-for="item of props.weatherDaily" :key="item.maxTempt">
          <div class="daily__content">
            <div class="daily__content">
              <div class="daily__day">{{ item.day }}</div>
              <div class="daily__date">{{ item.formatDate }}</div>
              <img class="daily__icon" :src="item.icon" alt="Погода" />
              <div class="daily__min-tempt"><span>мин.</span> {{ item.minTempt }}</div>
              <div class="daily__max-tempt"><span>макс.</span> {{ item.maxTempt }}</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide v-for="item of props.weatherDaily" :key="item.maxTempt">
          <div class="daily__content">
            <div class="daily__content">
              <div class="daily__day">{{ item.day }}</div>
              <div class="daily__date">{{ item.formatDate }}</div>
              <img class="daily__icon" :src="item.icon" alt="Погода" />
              <div class="daily__min-tempt"><span>мин.</span> {{ item.minTempt }}</div>
              <div class="daily__max-tempt"><span>макс.</span> {{ item.maxTempt }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DailyWeather } from '../main';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

interface Props {
  weatherDaily: DailyWeather[];
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.daily {
  padding: 24px 32px;
  background: #f4f8fd;
  border-radius: 20px;

  &__title {
    margin: 0 0 40px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #212225;
  }

  &__day {
    margin: 0 0 4px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    color: #4f5864;
  }
  &__date {
    margin: 0 0 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #6d7784;
  }

  &__icon {
    margin: 0 0 20px;
  }
  &__min-tempt,
  &__max-tempt {
    font-weight: 18px;
    font-weight: 500;
    color: #4f5864;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #a0a7af;
    }
  }
  &__min-tempt {
    margin: 0 0 8px;
  }
}
</style>

<!-- :breakpoints="{ '640': { slidesPerView: 2, spaceBetween: 20, }, '768': { slidesPerView: 4,
spaceBetween: 40, }, '1024': { slidesPerView: 5, spaceBetween: 10, }, }" -->
