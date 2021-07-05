import React from 'react';
// import cl from 'clsx';
// import Skeleton from 'react-loading-skeleton';
// import s from './WeatherCityList.module.scss';
// import { } from '../../const';
import WeatherCity from '../WeatherCity/WeatherCity';

// interface ICardList {
//   cardList: IHome[];
//   className?: string;
// }

// const WeatherCityList = ({ cardList, className }: ICardList) => (
const WeatherCityList = () => (
  /*
  <ul className={cl(s.list, className)}>
    {cardList.length > 0
      ? cardList.map((card) => (
          <li className={cl(s.card)} key={card.id}>
            <WeatherCity props={card} />
          </li>
        ))
      : <Skeleton  />
      }
  </ul>
  */
  <WeatherCity />
);

export default WeatherCityList;
