import type { IHeadline } from '@/api/types';

export type DailyForecast = {
  Date: string;
  EpochDate: number;
  Temperature: Temperature;
  Day: Day;
  Night: Night;
  Sources: string[];
  MobileLink: string;
  Link: string;
};

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
    Speed: { Value: number; Unit: string; UnitType: number };
  };
}

interface Night {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationProbability: number | null;
  Wind: {
    Speed: { Value: number; Unit: string; UnitType: number };
  };
}

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
