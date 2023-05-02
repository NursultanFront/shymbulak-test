import type { AxiosInstance } from 'axios';
import { BasicRest } from '../basic-rest';
import type { CurrentDay, DailyForecastList, HourlyForeCast } from './types';

export class WeatherRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public current(
    city: string,
    params: { apikey: string; language: string; metric: boolean; details?: boolean }
  ) {
    return this.getRequest<CurrentDay[]>(`/currentconditions/v1/${city}`, params);
  }

  public twentyHour(
    city: string,
    params: { apikey: string; language: string; metric: boolean; details?: boolean }
  ) {
    return this.getRequest<HourlyForeCast[]>(`/forecasts/v1/hourly/12hour/${city}`, params);
  }

  public fiveDay(
    city: string,
    params: { apikey: string; language: string; metric: boolean; details?: boolean }
  ) {
    return this.getRequest<DailyForecastList>(`/forecasts/v1/daily/5day/${city}`, params);
  }
}
