import type { IHeadline } from '@/api/types';

export interface CurrentDay {
  WeatherText: string;
  WeatherIcon: number;
  Wind: Wind;
  PrecipitationSummary: PrecipitationSummary;
  Temperature: {
    Metric: Metric;
  };
}

export type DailyForecast = {
  Date: string;
  EpochDate: number;
  Temperature: Temperature;
  Day: Day;
  Night: Night;
  Sources: string[];
  MobileLink: string;
  Link: string;
  Sun: Sun;
};

export type DailyForecastList = {
  DailyForecasts: DailyForecast[];
  Headline: IHeadline;
};

export interface HourlyForeCast {
  DateTime: string;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  IsDaylight: boolean;
  Temperature: TempValue;
  PrecipitationProbability: number;
  MobileLink: string;
  Link: string;
}

interface PrecipitationSummary {
  Precipitation: Precipitation;
}

interface Precipitation {
  Metric: Metric;
}

interface Wind {
  Speed: Speed;
}

interface Speed {
  Metric: Metric;
}

interface Metric {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface Sun {
  Rise: string;
  EpochRise: number;
  Set: string;
  EpochSet: number;
}

interface Temperature {
  Minimum: TempValue;
  Maximum: TempValue;
}

interface TempValue {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface Day {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationProbability: number | null;
  Wind: {
    Speed: Metric;
  };
}

interface Night {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationProbability: number | null;
  Wind: {
    Speed: Metric;
  };
}
