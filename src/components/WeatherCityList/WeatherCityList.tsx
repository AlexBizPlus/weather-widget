import React from 'react';
import cl from 'clsx';
import { useSelector } from 'react-redux';
import { ICityList, IWeatherCityList } from '../../types';
import s from './WeatherCityList.module.scss';
import WeatherCity from '../WeatherCity/WeatherCity';
import { RootState } from '../../store/reducers/root-reducer';

const WeatherCityList = ({ className }: IWeatherCityList) => {
  const cityList = useSelector((state: RootState) => state.CITIES.cities);

  return (
    <ul className={cl(s.list, className)}>
      {cityList.length > 0 &&
        cityList.map((item: ICityList) => (
          <li key={item.name}>
            <WeatherCity cityName={item.name} />
          </li>
        ))}
    </ul>
  );
};

export default WeatherCityList;
