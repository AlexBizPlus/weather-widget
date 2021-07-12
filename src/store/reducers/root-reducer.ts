import { combineReducers } from 'redux';
import citiesReducer from './cities-reducer';

export const rootReducer = combineReducers({
  CITIES: citiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
