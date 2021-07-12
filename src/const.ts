import { ICityList } from './types';

export const WEATHER_CITY_NAMES = 'WeatherCityNames';

export const CITIES_BY_DEFAULT: ICityList[] = [
  { id: 0, name: 'London' },
  { id: 1, name: 'Moscow' },
];

export const BEAUFORT_SCALE = [
  { min: 0, max: 1, description: 'Calm' },
  { min: 1, max: 4, description: 'Light air' },
  { min: 4, max: 7, description: 'Light breeze' },
  { min: 7, max: 11, description: 'Gentle breeze' },
  { min: 11, max: 16, description: 'Moderate breeze' },
  { min: 16, max: 22, description: 'Fresh breeze' },
  { min: 22, max: 28, description: 'Strong breeze' },
  { min: 28, max: 34, description: 'Near (hard) gale' },
  { min: 34, max: 41, description: 'Gale' },
  { min: 41, max: 48, description: 'Strong gale' },
  { min: 48, max: 56, description: 'Storm' },
  { min: 56, max: 64, description: 'Violent storm' },
  { min: 64, max: Infinity, description: 'Storm' },
];

export const COMPASS_SECTORS = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
  'N',
];

export const MAX_CITIES = 3;
