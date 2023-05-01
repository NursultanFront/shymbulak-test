<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__logo logo">
        <div class="logo">
          <RouterLink to="#">
            <FooterLogoIcon />
          </RouterLink>
        </div>

        <div class="logo__market">
          <RouterLink to="#">
            <img src="@/assets/footer/google.png" alt="Google" />
          </RouterLink>
          <RouterLink to="#">
            <img src="@/assets/footer/apple.png" alt="Google" />
          </RouterLink>
        </div>
      </div>

      <nav class="footer__nav nav">
        <div class="nav__resort">
          <h2 class="nav__title">Курорт</h2>
          <ul>
            <li v-for="item of resort" :key="item.id">
              <RouterLink :to="item.link">
                <span>{{ item.text }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="nav__skating">
          <h2 class="nav__title">Катания</h2>
          <ul>
            <li v-for="item of skating" :key="item.id">
              <RouterLink :to="item.link">
                <span>{{ item.text }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="nav__info">
          <h2 class="nav__title">Катания</h2>
          <ul>
            <li v-for="item of info" :key="item.id">
              <RouterLink :to="item.link">
                <span>{{ item.text }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="nav__contacts contacts">
          <h2 class="nav__title">Контакты</h2>
          <div class="contacts__box">
            <ul class="contacts__social">
              <li class="contacts__item" v-for="item of contacts" :key="item.id">
                <RouterLink :to="item.link">
                  <component :is="item.icon" />
                </RouterLink>
              </li>
            </ul>
            <div><a href="mailto:info@gmail.com">info@gmail.com</a></div>
            <div class="">
              <a :href="'tel:+7 727 331 77 77'">+7 727 331 77 77</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import FooterLogoIcon from '../icons/footer/FooterLogoIcon.vue';
import InstagramIcon from '../icons/footer/InstagramIcon.vue';
import FacebookIcon from '../icons/footer/FacebookIcon.vue';
import VkIcon from '../icons/footer/VkIcon.vue';
import YoutubeIcon from '../icons/footer/YoutubeIcon.vue';

const resort = [
  {
    id: 1,
    text: 'Отель',
    link: '#',
  },
  {
    id: 2,
    text: 'Рестораны',
    link: '#',
  },
  {
    id: 3,
    text: 'Развлечения',
    link: '#',
  },
  { id: 4, text: 'Магазин', link: '#' },
  {
    id: 5,
    text: 'Детям',
    link: '#',
  },
];

const skating = [
  {
    id: 1,
    text: 'Билеты',
    link: '#',
  },
  {
    id: 2,
    text: 'Прокат',
    link: '#',
  },
  {
    id: 3,
    text: 'Школа',
    link: '#',
  },
  { id: 4, text: 'Паркинг', link: '#' },
];

const info = [
  {
    id: 1,
    text: 'Погода',
    link: '#',
  },
  {
    id: 2,
    text: 'Правила',
    link: '#',
  },
  {
    id: 3,
    text: 'Новости',
    link: '#',
  },
  { id: 4, text: 'Как добраться', link: '#' },
  {
    id: 5,
    text: 'Тех. поддержка',
    link: '#',
  },
];

const contacts = [
  {
    id: 1,
    icon: FacebookIcon,
    link: '#',
  },
  {
    id: 2,
    icon: YoutubeIcon,
    link: '#',
  },
  {
    id: 3,
    icon: InstagramIcon,
    link: '#',
  },
  {
    id: 4,
    icon: VkIcon,
    link: '#',
  },
];
</script>

<style scoped lang="scss">
.footer {
  background-color: #212225;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    padding: 59px 50px 24px;
  }
}

.nav {
  display: flex;
  gap: 80px;
  &__title {
    margin: 0 0 24px;
    font-weight: 500;
    font-size: 21px;
    line-height: 120%;
    color: #ffffff;
  }

  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #ffffff;
    opacity: 0.5;
    transition: opacity 0.2s ease-in;

    &:hover {
      opacity: 1;
    }
  }

  &__resort,
  &__skating,
  &__info {
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
}

.contacts {
  &__social {
    display: flex;
    gap: 16px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
