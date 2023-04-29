<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__left">
        <img src="@/assets/logo.png" alt="logo" />
        <div class="header__live border-header">
          <img src="@/assets/header/live.png" alt="live" />
          <span>live</span>
        </div>
        <div class="header__tempt border-header">
          <img src="" alt="Weather" />
          <span>12C</span>
        </div>
        <div class="header__season season border-header">
          <span
            class="season__item"
            :class="{
              yellow: getCurrentSeason,
            }"
            >Лето</span
          >
          <span
            class="season__item"
            :class="{
              yellow: !getCurrentSeason,
            }"
            >Зима</span
          >
        </div>
      </div>
      <div class="header__right">
        <div class="header__lang border-header">RU</div>
        <div class="header__user border-header">
          <UserIcon />
        </div>
        <div class="header__favourite border-header">
          <HeartIcon />
        </div>
        <div class="header__cart border-header">
          <CartIcon />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import UserIcon from '../icons/header/UserIcon.vue';
import HeartIcon from '../icons/header/HeartIcon.vue';
import CartIcon from '../icons/header/CartIcon.vue';

const getCurrentSeason = computed(() => {
  const now = new Date();
  const month = now.getMonth() + 1;

  if (month >= 1 && month <= 8) {
    return true;
  }

  return false;
});

console.log(getCurrentSeason);
</script>

<style scoped lang="scss">
.header {
  flex-grow: 1;
  color: #6d7784;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__left {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }

  &__live {
    display: flex;
    align-items: center;
    padding: 14px 24px;
  }

  &__tempt {
    display: flex;
    align-items: center;
    padding: 18px 24px;
  }

  &__season {
    display: flex;
    align-items: center;
    padding: 8px 24px;
  }

  &__right {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }

  &__lang {
    padding: 15px 12px;
    font-weight: 400;
    font-size: 22px;
    line-height: 120%;
    text-align: center;
  }

  &__user {
    padding: 13px;
  }

  &__favourite {
    padding: 15px 13px;
  }

  &__cart {
    padding: 14px 17px;
  }
}

.border-header {
  display: flex;
  column-gap: 13px;
  border: 1px solid #dae9f4;
  border-radius: 16px;
}

.season {
  font-size: 16px;
  line-height: 120%;

  color: #a0a7af;
}

.season__item {
}

.yellow {
  padding: 10px 13px;
  color: #ffffff;
  background: linear-gradient(118.11deg, #ffd710 -72.69%, #f99909 154.67%);
  box-shadow: 0px 8.88889px 10.6667px rgba(230, 150, 66, 0.15);
  border-radius: 12px;
}
</style>
