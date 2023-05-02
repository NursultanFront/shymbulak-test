<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__left">
        <AsideBtn :disabled="false" :toggleSwitch="props.switchToggle" />
        <RouterLink to="#" class="header__logo">
          <img src="@/assets/logo.png" alt="logo" />
        </RouterLink>
        <div class="header__live border-header">
          <img src="@/assets/header/live.png" alt="live" />
          <span>live</span>
        </div>
        <div class="header__tempt border-header">
          <img
            class="header__tempt-img"
            v-if="!props.loading && !props.error"
            :src="props.icon"
            alt="Weather"
          />
          <span v-if="!props.loading && !props.error">{{ props.tempt }} C°</span>
          <LoadingIcon v-else-if="props.loading" class="header__loading" />
          <img
            class="header__error-img"
            v-else-if="props.error"
            src="@/assets/Error.png"
            alt="Ошибка"
          />
        </div>
        <div class="header__season season border-header">
          <span
            :class="{
              yellow: getCurrentSeason,
            }"
            >Лето</span
          >
          <span
            :class="{
              yellow: !getCurrentSeason,
            }"
            >Зима</span
          >
        </div>
        <button class="header__loupe border-header">
          <LoupeIcon />
        </button>
      </div>
      <div class="header__center center">
        <RouterLink to="#">
          <img src="@/assets/logo.png" alt="logo" />
        </RouterLink>
      </div>
      <div class="header__right">
        <button class="header__lang border-header">RU</button>
        <RouterLink to="#" class="header__user border-header">
          <UserIcon />
        </RouterLink>
        <RouterLink to="#" class="header__favourite border-header">
          <HeartIcon />
        </RouterLink>
        <RouterLink to="#" class="header__cart border-header">
          <CartIcon />
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import AsideBtn from '../aside-btn.vue';

import { RouterLink } from 'vue-router';

import UserIcon from '../icons/header/UserIcon.vue';
import HeartIcon from '../icons/header/HeartIcon.vue';
import CartIcon from '../icons/header/CartIcon.vue';
import LoupeIcon from '../icons/header/LoupeIcon.vue';
import LoadingIcon from '../icons/LoadingIcon.vue';

interface Props {
  loading: boolean;
  error: boolean;
  icon: string;
  tempt: number;
  switchToggle: (value: boolean) => void;
}

const props = defineProps<Props>();

const getCurrentSeason = computed(() => {
  const now = new Date();
  const month = now.getMonth() + 1;

  if (month >= 1 && month <= 8) {
    return true;
  }

  return false;
});
</script>

<style scoped lang="scss">
.header {
  position: relative;
  color: #6d7784;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__left,
  &__right {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }

  &__loading {
    width: 28px;
    height: 25px;
  }

  &__error-img {
    width: 28px;
  }

  &__live {
    display: flex;
    align-items: center;
    padding: 14px 24px;
  }

  &__tempt {
    display: flex;
    align-items: center;
    padding: 16px 24px;

    &-img {
      width: 40px;
    }
  }

  &__season {
    display: flex;
    align-items: center;
    padding: 8px 24px;
  }

  &__loupe {
    padding: 16px;
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

.yellow {
  padding: 10px 13px;
  color: #ffffff;
  background: linear-gradient(118.11deg, #ffd710 -72.69%, #f99909 154.67%);
  box-shadow: 0px 8.88889px 10.6667px rgba(230, 150, 66, 0.15);
  border-radius: 12px;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}
</style>

<style scoped lang="scss">
@media (max-width: 1359px) {
  .header {
    &__wrapper {
      padding: 0 20px;
    }
  }
}

@media (max-width: 1154px) {
  .header {
    &__logo,
    &__tempt,
    &__season,
    &__live {
      display: none;
    }

    &__left,
    &__right {
      column-gap: 20px;
    }
  }

  .center {
    display: flex;
  }
}

@media (max-width: 854px) {
  .header {
    &__lang {
      display: none;
    }
  }
}

@media (max-width: 696px) {
  .header {
    &__favourite {
      display: none;
    }

    &__loupe {
      padding: 12px;
    }
    &__user {
      padding: 10px;
    }
    &__cart {
      padding: 10px 13px;
    }
  }
}
</style>

<style lang="scss">
.header {
  .aside-toggle-btn {
    display: none;
  }
}

@media (max-width: 1154px) {
  .header {
    .aside-toggle-btn {
      display: flex;
    }
  }
}

@media (max-width: 696px) {
  .header {
    .aside-toggle-btn {
      padding: 12px;

      span {
        width: 20px;
      }
    }
  }
}
</style>
