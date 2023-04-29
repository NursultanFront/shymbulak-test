import axios from 'axios';
import { WeatherRest } from './weather';

class Api {
  public constructor() {
    this.endpoint = Api.createEndpoint();
    this.weather = new WeatherRest(this.endpoint);
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      paramsSerializer: {
        indexes: null,
      },
      transformRequest: [(data) => JSON.stringify(data)],
      transformResponse: [(data) => JSON.parse(data ? data : '{}')],
    });
  }

  private readonly endpoint;
  public weather;
}

export const api = new Api();
