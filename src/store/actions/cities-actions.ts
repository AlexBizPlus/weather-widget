import { ICityList } from '../../types';
import { SET_CITIES, ADD_CITY, REMOVE_CITY } from './action-types';

export const setCities = (cities: ICityList[]) => ({
  type: SET_CITIES,
  cities,
});

export const setAddCities = (cityName: string) => ({
  type: ADD_CITY,
  cityName,
});

export const setRemoveCities = (cityName: string) => ({
  type: REMOVE_CITY,
  cityName,
});
