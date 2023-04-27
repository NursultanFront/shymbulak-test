<template>
  <aside class="sidebar">
    <div class="sidebar__wrapper">
      <RouterLink
        v-for="{ icon, id, text, to } of asideLinks"
        class="sidebar__link"
        :to="to"
        :key="id"
      >
        <div class="sidebar__icon">
          <component :is="icon" />
        </div>
        <span class="sidebar__name">{{ text }}</span>
      </RouterLink>
      <RouterLink to="#" class="sidebar__btn aside-btn">
        <component :is="InfoIcon" />
        <span class="aside-btn__text">Инфо</span>
      </RouterLink>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

import ChildrenIcon from './icons/aside/ChildrenIcon.vue';
import DishIcon from './icons/aside/DishIcon.vue';
import GlassesIcon from './icons/aside/GlassesIcon.vue';
import InfoIcon from './icons/aside/InfoIcon.vue';
import MainIcon from './icons/aside/MainIcon.vue';
import ParkingIcon from './icons/aside/ParkingIcon.vue';
import SchoolIcon from './icons/aside/SchoolIcon.vue';
import ShopIcon from './icons/aside/ShopIcon.vue';
import StarIcon from './icons/aside/StarIcon.vue';
import TicketIcon from './icons/aside/TicketIcon.vue';
import HotelIcon from './icons/aside/HotelIcon.vue';

const asideLinks = [
  {
    id: 1,
    text: 'Главная',
    icon: MainIcon,
    to: '#',
  },
  {
    id: 2,
    text: 'Билеты',
    icon: TicketIcon,
    to: '#',
  },
  {
    id: 3,
    text: 'Прокат',
    icon: GlassesIcon,
    to: '#',
  },
  {
    id: 4,
    text: 'Школа',
    icon: SchoolIcon,
    to: '#',
  },
  {
    id: 5,
    text: 'Развлечение',
    icon: StarIcon,
    to: '#',
  },
  {
    id: 6,
    text: 'Отели',
    icon: HotelIcon,
    to: '#',
  },
  {
    id: 7,
    text: 'Рестораны',
    icon: DishIcon,
    to: '#',
  },
  {
    id: 8,
    text: 'Магазин',
    icon: ShopIcon,
    to: '#',
  },
  {
    id: 9,
    text: 'Детям',
    icon: ChildrenIcon,
    to: '#',
  },
  {
    id: 10,
    text: 'Паркинг',
    icon: ParkingIcon,
    to: '#',
  },
];
</script>

<style scoped lang="scss">
.sidebar {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__link {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
  }
  &__name {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #4f5864;
  }
  &__btn {
  }
}

.aside-btn {
  display: flex;
  align-items: center;
  column-gap: 12px;
  background: #75b6f2;
  box-shadow: 0px 8.88889px 10.6667px rgba(117, 182, 242, 0.15);
  border-radius: 12px;
  padding: 10px 20px;

  &__text {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
}
</style>
