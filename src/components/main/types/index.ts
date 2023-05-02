export interface Weather {
  description: string;
  icon: string;
  wind: number;
  precipitation: number | null;
  tempt: number;
}

export interface HourlyWeather extends Pick<Weather, 'icon' | 'tempt'> {
  time: number;
}

export interface DailyWeather extends Pick<Weather, 'icon'> {
  maxTempt: number;
  minTempt: number;
  day: string;
  formatDate: string;
}
