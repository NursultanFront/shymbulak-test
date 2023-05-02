<template>
  <div class="daily weather__box">
    <h2 class="daily__title weather__title">Прогноз на 10 дней</h2>
    <div v-if="!props.error && !props.loading" class="daily__slider">
      <swiper
        class="mySwiper"
        :direction="'horizontal'"
        :breakpoints="{
          '320': {
            slidesPerView: 'auto',
            direction: 'vertical',
          },
          '697': {
            slidesPerView: 7,
            spaceBetween: 30,
            direction: 'horizontal',
          },
          '1200': {
            slidesPerView: 10,
            spaceBetween: 30,
          },
        }"
      >
        <swiper-slide v-for="item of props.weatherDaily" :key="item.maxTempt">
          <div class="daily__content">
            <div class="daily__day">{{ item.day }}</div>
            <div class="daily__date">{{ item.formatDate }}</div>
            <img class="daily__icon" :src="item.icon" alt="Погода" />
            <div class="daily__min-tempt"><span>мин.</span> {{ item.minTempt }}°</div>
            <div class="daily__max-tempt"><span>макс.</span> {{ item.maxTempt }}°</div>
          </div>
        </swiper-slide>
        <swiper-slide v-for="item of props.weatherDaily" :key="item.maxTempt">
          <div class="daily__content">
            <div class="daily__day">{{ item.day }}</div>
            <div class="daily__date">{{ item.formatDate }}</div>
            <img class="daily__icon" :src="item.icon" alt="Погода" />
            <div class="daily__min-tempt"><span>мин.</span> {{ item.minTempt }}°</div>
            <div class="daily__max-tempt"><span>макс.</span> {{ item.maxTempt }}°</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <LoadingIcon v-else-if="props.loading" :style="props.style" />
    <p v-else-if="props.error">Ошибка сети</p>
  </div>
</template>

<script setup lang="ts">
import type { DailyWeather } from '../main/types';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import LoadingIcon from '../icons/LoadingIcon.vue';

interface Props {
  loading: boolean;
  error: boolean;
  style: { alignSelf: string };
  weatherDaily: DailyWeather[];
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.daily {
  background: #f4f8fd;
  border-radius: 20px;

  &__title {
    margin: 0 0 40px;
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
    position: relative;
    font-size: 16px;
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

<style lang="scss" scoped>
@media (max-width: 696px) {
  .daily {
    max-height: 540px;
    overflow: auto;

    &__title {
      margin: 0 0 15px;
    }

    &__content {
      padding: 10px 0;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      border-top: 1px solid #e1e7ee;
    }

    &__date {
      display: none;
    }

    &__day,
    &__icon,
    &__min-tempt,
    &__max-tempt {
      margin: 0;
    }
  }
}
</style>
