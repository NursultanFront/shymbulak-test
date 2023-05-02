<template>
  <main class="main">
    <div class="main__wrapper">
      <h1 class="main__title">Погода</h1>
      <div class="main__weather weather">
        <div class="weather__one-day day weather__box">
          <h2 class="day__title weather__title">Сейчас</h2>
          <div class="day__wrapper" v-if="!props.error && !props.loading">
            <div class="day__icon">
              <img :src="props.weatherDay.icon" alt="погода" />
            </div>
            <div class="day__content">
              <h3 class="day__tab-title">Сейчас</h3>
              <h4 class="day__small-title">{{ props.weatherDay.description }}</h4>
              <div class="day__tempt">{{ props.weatherDay.tempt }} °C</div>
              <div class="day__info info">
                <div class="info__wind">
                  <WindIcon />
                  <span class="info__text">{{ props.weatherDay.wind }} м/с</span>
                </div>
                <div class="info__dry">
                  <PrecIcon />
                  <span class="info__text">{{ props.weatherDay.precipitation }} см</span>
                </div>
              </div>
            </div>
          </div>
          <LoadingWhiteIcon v-else-if="props.loading" :style="getStyleObject" />
          <p v-else-if="props.error">Ошибка сети</p>
        </div>
        <div class="weather__hours">
          <HourlySlider
            :loading="props.loading"
            :error="props.error"
            :style="getStyleObject"
            :weatherHourly="props.weatherHourly"
          />
        </div>
        <div class="weather__daily">
          <DailySlider
            :loading="props.loading"
            :error="props.error"
            :style="getStyleObject"
            :weatherDaily="props.weatherDaily"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { DailyWeather, HourlyWeather, Weather } from './types';

import LoadingWhiteIcon from '../icons/LoadingWhiteIcon.vue';

import HourlySlider from '../weatherSlider/hourlySlider.vue';
import DailySlider from '../weatherSlider/dailySlider.vue';
import WindIcon from '../icons/main/WindIcon.vue';
import PrecIcon from '../icons/main/PrecIcon.vue';

interface PropsWeather {
  loading: boolean;
  error: boolean;
  weatherDay: Weather;
  weatherDaily: DailyWeather[];
  weatherHourly: HourlyWeather[];
}

const props = defineProps<PropsWeather>();

const getStyleObject = computed(() => {
  const styleObject = {
    alignSelf: '',
  };

  if (props.loading) {
    styleObject.alignSelf = 'center';
  }

  return styleObject;
});
</script>

<style lang="scss">
.main {
  &__wrapper {
    padding: 44px 50px 59px;
  }

  &__title {
    margin: 0 0 48px;
  }
}

.weather {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 48px 24px;

  &__box {
    padding: 24px 32px;
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }

  &__one-day,
  &__hours {
    display: flex;
    flex-direction: column;
    grid-column: span 6 / span 6;
  }

  &__daily {
    grid-column: span 12 / span 12;
  }
}

.day {
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  color: #ffffff;
  background-color: #75b6f2;
  border-radius: 20px;

  &__title {
    color: #ffffff;
  }

  &__wrapper {
    display: flex;
    column-gap: 56px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  &__tab-title {
    display: none;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }

  &__icon {
    display: flex;
    align-items: flex-end;

    img {
      width: 147px;
    }
  }

  &__tempt {
    padding: 0 0 16px;
    font-weight: 700;
    font-size: 64px;
    line-height: 120%;
    color: #ffffff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  &__icon-loading {
    align-self: center;
  }
}

.info {
  padding: 16px 0 0;
  display: flex;
  column-gap: 32px;

  &__wind,
  &__dry {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
}
</style>

<style lang="scss">
@media (max-width: 1154px) {
  .main {
    &__wrapper {
      padding: 44px 20px 59px;
    }
  }

  .weather {
    &__box {
      padding: 16px 20px;
    }

    &__title {
      font-size: 18px;
    }
  }

  .day {
    &__tempt {
      font-size: 56px;
    }
    &__icon {
      align-items: center;
    }
  }
}

@media (max-width: 1048px) {
  .day {
    padding: 16px 20px;
    &__wrapper {
      column-gap: 20px;
    }
    &__tempt {
      font-size: 44px;
    }
    &__icon {
      align-items: center;
    }
  }
}

@media (max-width: 854px) {
  .weather {
    &__one-day {
      justify-content: center;
    }
  }

  .day {
    &__wrapper {
      column-gap: 0;
    }

    &__content {
      flex-direction: column-reverse;
    }

    &__title {
      display: none;
    }

    &__tab-title {
      display: block;
    }

    &__tempt {
      padding: 0 0 6px;
      font-size: 38px;
    }

    &__small-title {
      padding: 6px 0 0;
      font-weight: 600;
    }

    &__info {
      display: none;
    }
  }
}

@media (max-width: 696px) {
  .main {
    &__title {
      margin: 0 0 24px;
      font-size: 24px;
    }
  }

  .weather {
    gap: 24px;

    &__one-day,
    &__hours {
      grid-column: span 12 / span 12;
    }
  }
}
</style>
