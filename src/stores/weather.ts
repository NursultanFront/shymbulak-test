import { ref } from 'vue';
import { defineStore } from 'pinia';
import { api } from '@/api/index';

interface Weather {
  description: string;
  icon: string;
  wind: number;
  precipitation: number | null;
  tempt: number;
}

interface HourlyWeather extends Pick<Weather, 'icon' | 'tempt'> {
  time: number;
}

interface DailyWeather extends Pick<Weather, 'icon'> {
  day: string;
  formatDate: string;
  maxTempt: number;
  minTempt: number;
}

const addZero = (num: number) => {
  return num < 10 ? '0' + num : num;
};

const getHour = (value: string) => {
  const datetime = new Date(value);
  const hour = datetime.getHours();

  return hour;
};

const getDayOrNight = (rise: string, set: string) => {
  const now = new Date();
  const riseTime = new Date(rise);
  const setTime = new Date(set);

  if (now > riseTime && now < setTime) {
    return 'Day';
  } else {
    return 'Night';
  }
};

const transformDaily = (value: string) => {
  const today = new Date();
  console.log(today);
  const date = new Date(value);
  return date.toLocaleDateString() === today.toLocaleDateString()
    ? 'Сегодня'
    : date.toLocaleDateString('ru-RU', { weekday: 'short' });
};

const formattedDate = (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
};

export const useWeatherStore = defineStore('weather', () => {
  const isLoaded = ref<boolean>(false);
  const isError = ref<boolean>(false);

  const weatherDay = ref<Weather>({
    description: '',
    icon: '',
    precipitation: 0,
    tempt: 0,
    wind: 0,
  });

  const weatherHourly = ref<HourlyWeather[]>([]);

  const weatherDaily = ref<DailyWeather[]>([]);

  async function getWeatherDay() {
    const res = await api.weather.current('222191', {
      apikey: import.meta.env.VITE_API_KEY,
      language: 'ru',
      metric: true,
      details: true,
    });

    weatherDay.value = {
      description: res[0].WeatherText,
      icon: `http://developer.accuweather.com/sites/default/files/${addZero(
        res[0].WeatherIcon
      )}-s.png`,
      precipitation: res[0].PrecipitationSummary.Precipitation.Metric.Value,
      wind: res[0].Wind.Speed.Metric.Value,
      tempt: res[0].Temperature.Metric.Value,
    };
  }

  async function getHourly() {
    const res = await api.weather.twentyHour('222191', {
      apikey: import.meta.env.VITE_API_KEY,
      language: 'ru',
      metric: true,
      details: true,
    });
    weatherHourly.value = res.map((item) => ({
      icon: `http://developer.accuweather.com/sites/default/files/${addZero(
        item.WeatherIcon
      )}-s.png`,
      tempt: item.Temperature.Value,
      time: getHour(item.DateTime),
    }));
  }

  async function getDaily() {
    const { DailyForecasts } = await api.weather.fiveDay('222191', {
      apikey: import.meta.env.VITE_API_KEY,
      language: 'ru',
      metric: true,
      details: true,
    });

    weatherDaily.value = DailyForecasts.map((item) => {
      return {
        icon: `http://developer.accuweather.com/sites/default/files/${addZero(
          item.Day.Icon
        )}-s.png`,
        maxTempt: item.Temperature.Maximum.Value,
        minTempt: item.Temperature.Minimum.Value,
        day: transformDaily(item.Date),
        formatDate: formattedDate(item.Date),
      };
    });
  }

  async function init() {
    isError.value = false;
    isLoaded.value = true;
    try {
      await getWeatherDay();
      await getHourly();
      await getDaily();
    } catch (error) {
      isError.value = true;
    } finally {
      isLoaded.value = false;
    }
  }
  return { weatherDay, init, weatherHourly, weatherDaily, isLoaded, isError };
});
