<template>
  <div class="hours">
    <h2 class="hours__title">Погода в течении дня</h2>
    <div class="hours__slider">
      <swiper
        :slidesPerView="5"
        :spaceBetween="10"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }"
        class="mySwiper"
        :modules="[Navigation]"
        :navigation="true"
      >
        <swiper-slide v-for="item of props.weatherHourly" :key="item.time">
          <div class="hours__content">
            <div class="hours__time">{{ item.time }}</div>
            <img class="hours__icon" :src="item.icon" alt="Погода" />
            <div class="hours__tempt">{{ item.tempt }} °</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import type { HourlyWeather } from '../main';

interface Props {
  weatherHourly: HourlyWeather[];
}

const props = defineProps<Props>();
</script>

<style lang="scss">
.hours {
  .swiper {
    position: static;
    width: 80%;

    &-button-prev,
    &-button-next {
      color: #4f5864;
    }

    &-button-prev {
      left: var(--swiper-navigation-sides-offset, 20px);
    }

    &-button-next {
      right: var(--swiper-navigation-sides-offset, 20px);
    }
  }
}
</style>

<style lang="scss" scoped>
.hours {
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  border: 1px solid #f3f5f7;
  border-radius: 20px;

  &__slider {
    position: relative;
  }

  &__title {
    margin: 0 0 39px;
    padding: 0 0 24px;
    font-size: 24px;
    line-height: 29px;
    color: #212225;
    border-bottom: 1px solid #e1e7ee;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
  }
}
</style>
