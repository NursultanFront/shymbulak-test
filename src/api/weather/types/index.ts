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
  Minimum: Minimum;
  Maximum: Maximum;
}

interface Minimum {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface Maximum {
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
}

export type DailyForecastList = {
  DailyForecasts: DailyForecast[];
  Headline: IHeadline;
};
