import { CITIES_BY_DEFAULT } from '../../const';
import { IAction, ICityList } from '../../types';
import { SET_CITIES, ADD_CITY, REMOVE_CITY } from '../actions/action-types';

interface IState {
  cities: ICityList[];
}

const initialState: IState = {
  cities: CITIES_BY_DEFAULT,
};

const citiesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        cities: action.cities,
      };

    case ADD_CITY:
      return {
        ...state,
        cities: state.cities.concat({ id: state.cities.length, name: action.cityName }),
      };

    case REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter((item) => item.name !== action.cityName),
      };

    default:
      return state;
  }
};

export default citiesReducer;
