<template>
  <div class="hours">
    <h2 class="hours__title">Погода в течении дня</h2>
    <div class="hours__slider">
      <swiper
        :slidesPerView="1"
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
            spaceBetween: 50,
          },
        }"
        class="mySwiper"
        :modules="[Navigation]"
        :navigation="true"
      >
        <swiper-slide>
          <div class="hours__content">
            <div class="hours__time">14</div>
            <img class="hours__icon" src="" alt="Погода" />
            <div class="hours__tempt"></div>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
</script>

<style lang="scss">
.swiper {
  position: static;
  width: 80%;

  &-button-prev,
  &-button-next {
    color: #4f5864;
  }
}
</style>

<style lang="scss" scoped>
.hours {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &__title {
    padding-bottom: 24px;
    font-size: 24px;
    line-height: 29px;
    color: #212225;
  }

  &__content {
  }
}
</style>
