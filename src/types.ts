/* eslint-disable camelcase */
export interface IWeather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number | string;
  message?: string;
}

export interface IWeatherCityList {
  className?: string;
}

export interface ISettingsItem {
  cityName: string;
}

export interface IWeatherCity {
  cityName: string;
  className?: string;
}

export interface IError {
  cod: string;
  message: string;
}

export interface IUseData {
  loading: boolean;
  error: any;
  data: IWeather | undefined;
  mutate: () => void;
}

export interface IAction {
  type: string;
  [data: string]: any;
}

export interface ICityList {
  id: string | number;
  /** When true, the item is selected using MultiDrag */
  selected?: boolean;
  /** When true, the item is deemed "chosen", which basically just a mousedown event. */
  chosen?: boolean;
  /** When true, it will not be possible to pick this item up in the list. */
  filtered?: boolean;
  [property: string]: any;
}
