import React, { useEffect } from 'react';
import cl from 'clsx';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { IUseData, IWeather, IWeatherCity } from '../../types';
import { BACKEND_IMG_URL, CODE_OK } from '../../api/const';
import {
  calculateDewPoint,
  degToCompassSector,
  indicateBarom,
  performValue,
  speedToBftScale,
  upFirstLetter,
} from '../../utils';
import useData from '../../hooks/useData';
import WindIcon from '../../img/icon-wind.svg';
import BaromIcon from '../../img/icon-barom.svg';
import { setRemoveCities } from '../../store/actions/cities-actions';
import s from './WeatherCity.module.scss';

const WeatherCity = ({ cityName, className }: IWeatherCity) => {
  const dispatch = useDispatch();
  const { loading, error, data }: IUseData = useData(cityName);

  useEffect(() => {
    if (error || data?.cod !== CODE_OK) {
      dispatch(setRemoveCities(cityName));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, data]);

  if (loading || !data) return <Skeleton width={248} height={208} />;

  if (error || data?.cod !== CODE_OK) {
    return <div />;
  }

  const {
    name,
    visibility,
    main: { temp, feels_like: feelsLike, humidity, pressure },
    weather: [{ description, icon }],
    sys: { country },
    wind: { speed, deg },
  } = data as IWeather;
  const iconurl = `${BACKEND_IMG_URL}${icon}.png`;

  return (
    <div className={cl(s.root, className)}>
      <span className={s.name}>{`${name}, ${country}`}</span>
      <img className={s.img} src={iconurl} width={50} height={50} alt="weather icon" />
      <span className={s.temp}>{performValue(temp, 'degrees')}</span>
      <span className={s.text}>
        {`Feels like ${performValue(feelsLike, 'degrees')}. ${upFirstLetter(description)}. ${speedToBftScale(speed)}`}
      </span>
      <div className={s.wind}>
        <img className={s.windIcon} src={WindIcon} alt="wind direction" style={{ transform: `rotate(${deg}deg)` }} />
        <span>{`${performValue(speed, 'm/s', 1)} ${degToCompassSector(deg)}`}</span>
      </div>
      <div className={s.pressure}>
        <img src={BaromIcon} alt="barometr arrow" style={{ transform: `rotate(${indicateBarom(pressure)}deg)` }} />
        <span>{performValue(pressure, 'hPa')}</span>
      </div>
      <span className={s.humidity}>{`Humidity: ${performValue(humidity, '%')}`}</span>
      <span className={s.dewPoint}>{`Dew point: ${performValue(calculateDewPoint(temp, humidity), 'degrees')}`}</span>
      <span className={s.visibility}>{`Visibility: ${performValue(visibility / 1000, 'km', 1)}`}</span>
    </div>
  );
};
export default WeatherCity;
