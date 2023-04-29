<template>
  <main class="main">
    <div class="main__wrapper">
      <h1>Погода</h1>
      <div class="main__weather weather">
        <div class="weather__one-day day">
          <h2 class="day__title">Сейчас</h2>
          <div class="day__wrapper">
            <div class="day__icon">
              <img :src="weather.icon" alt="погода" />
            </div>
            <div class="day__content">
              <h3 class="day__small-title">{{ weather.description }}</h3>
              <div class="day__tempt">{{ weather.tempt }} °C</div>
              <div class="day__info info">
                <div class="info__wind">
                  <WindIcon />
                  <span class="info__text">{{ weather.wind }} м/с</span>
                </div>
                <div class="info__dry">
                  <PrecIcon />
                  <span class="info__text">{{ weather.precipitation }} см</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="weather__hours">
          <WeatherSlider />
        </div>
        <div class="weather__daily">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident dignissimos ipsa
          placeat dolores. Corporis exercitationem explicabo hic sunt id aspernatur error recusandae
          quae, ullam, nam animi adipisci. Asperiores, quis.
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onBeforeMount } from 'vue';
import { api } from '@/api/index';
import WeatherSlider from '../weatherSlider/weatherSlider.vue';

import WindIcon from '../icons/main/WindIcon.vue';
import PrecIcon from '../icons/main/PrecIcon.vue';

interface Weather {
  description: string;
  icon: string;
  wind: number;
  precipitation: number | null;
  tempt: number;
}

const weather = ref<Weather>({ description: '', icon: '', precipitation: 0, tempt: 0, wind: 0 });

const addZero = (num: number) => {
  return num < 10 ? '0' + num : num;
};

onBeforeMount(async () => {
  const { DailyForecasts } = await api.weather.current('222191', {
    apikey: import.meta.env.VITE_API_KEY,
    language: 'ru',
    metric: true,
    details: true,
  });

  weather.value = {
    description: DailyForecasts[0].Day.IconPhrase,
    icon: `http://developer.accuweather.com/sites/default/files/${addZero(
      DailyForecasts[0].Day.Icon
    )}-s.png`,
    precipitation: DailyForecasts[0].Day.PrecipitationProbability,
    wind: DailyForecasts[0].Day.Wind.Speed.Value,
    tempt: DailyForecasts[0].Temperature.Maximum.Value,
  };
});
</script>

<style lang="scss">
.weather {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 48px 24px;

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
  padding: 24px 32px 32px;
  color: #ffffff;
  background-color: #75b6f2;
  border-radius: 20px;

  &__wrapper {
    display: flex;
    column-gap: 56px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
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
    font-size: 64px;
    line-height: 77px;
    color: #ffffff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
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
