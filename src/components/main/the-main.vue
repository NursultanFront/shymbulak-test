<template>
  <main class="main">
    <div class="main__wrapper">
      <h1 class="main__title">Погода</h1>
      <div class="main__weather weather">
        <div class="weather__one-day day">
          <h2 class="day__title">Сейчас</h2>
          <div class="day__wrapper">
            <div class="day__icon">
              <img :src="props.weatherDay.icon" alt="погода" />
            </div>
            <div class="day__content">
              <h3 class="day__small-title">{{ props.weatherDay.description }}</h3>
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
        </div>
        <div class="weather__hours">
          <HourlySlider :weatherHourly="props.weatherHourly" />
        </div>
        <div class="weather__daily">
          <DailySlider :weatherDaily="props.weatherDaily" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import HourlySlider from '../weatherSlider/hourlySlider.vue';
import DailySlider from '../weatherSlider/dailySlider.vue';
import WindIcon from '../icons/main/WindIcon.vue';
import PrecIcon from '../icons/main/PrecIcon.vue';
import type { DailyWeather, HourlyWeather, Weather } from '.';

interface PropsWeather {
  weatherDay: Weather;
  weatherDaily: DailyWeather[];
  weatherHourly: HourlyWeather[];
}

const props = defineProps<PropsWeather>();
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
    font-weight: 700;
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
