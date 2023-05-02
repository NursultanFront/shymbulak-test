<template>
  <div class="hours weather__box">
    <h2 class="hours__title weather__title">Погода в течении дня</h2>
    <div v-if="!props.error && !props.loading" class="hours__slider">
      <swiper
        :slidesPerView="7"
        :spaceBetween="10"
        :navigation="true"
        :breakpoints="{
          '320': {
            slidesPerView: 5,
          },
          '769': {
            slidesPerView: 5,
          },
          '1024': {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }"
        class="mySwiper"
        :modules="[Navigation]"
      >
        <swiper-slide v-for="item of props.weatherHourly" :key="item.time">
          <div class="hours__content">
            <div class="hours__time">{{ item.time }}</div>
            <img class="hours__icon" :src="item.icon" alt="Погода" />
            <div class="hours__tempt">{{ item.tempt }} <span>°</span></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <LoadingIcon v-else-if="props.loading" :style="props.style" />
    <p v-else-if="props.error">Ошибка сети</p>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import type { HourlyWeather } from '../main/types';

import LoadingIcon from '../icons/LoadingIcon.vue';

interface Props {
  loading: boolean;
  error: boolean;
  style: { alignSelf: string };
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
    color: #212225;
    border-bottom: 1px solid #e1e7ee;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
  }

  &__tempt {
    position: relative;

    span {
      position: absolute;
      top: 0;
      right: -8px;
    }
  }
}

@media (max-width: 1154px) {
  .hours {
    .swiper {
      width: 100%;
    }
  }
}

@media (max-width: 854px) {
  .hours {
    &__title {
      margin: 0 0 12px;
      padding: 0 0 12px;
    }
  }
}
</style>

<style lang="scss">
@media (max-width: 1154px) {
  .hours {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
}
</style>
