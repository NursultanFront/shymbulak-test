import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { api } from '@/api/index';
interface Weather {
  description: string;
  icon: string;
  wind: number;
  precipitation: number | null;
  tempt: number;
}

const addZero = (num: number) => {
  return num < 10 ? '0' + num : num;
};

export const useCounterStore = defineStore('weather', () => {
  const weatherDay = ref<Weather>({
    description: '',
    icon: '',
    precipitation: 0,
    tempt: 0,
    wind: 0,
  });

  async function getWeatherDay() {
    const { DailyForecasts } = await api.weather.current('222191', {
      apikey: import.meta.env.VITE_API_KEY,
      language: 'ru',
      metric: true,
      details: true,
    });

    weatherDay.value = {
      description: DailyForecasts[0].Day.IconPhrase,
      icon: `http://developer.accuweather.com/sites/default/files/${addZero(
        DailyForecasts[0].Day.Icon
      )}-s.png`,
      precipitation: DailyForecasts[0].Day.PrecipitationProbability,
      wind: DailyForecasts[0].Day.Wind.Speed.Value,
      tempt: DailyForecasts[0].Temperature.Maximum.Value,
    };
  }

  return { weatherDay, getWeatherDay };
});
