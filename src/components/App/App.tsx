import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherCityList from '../WeatherCityList/WeatherCityList';
import Settings from '../Settings/Settings';
import SettingsIcon from '../../img/icon-settings.svg';
import CloseIcon from '../../img/icon-close.svg';
import { setCities } from '../../store/actions/cities-actions';
import { WEATHER_CITY_NAMES, CITIES_BY_DEFAULT } from '../../const';
import { RootState } from '../../store/reducers/root-reducer';
import s from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const [isSettingsShow, setIsSettingsShow] = useState(false);
  const cityList = useSelector((state: RootState) => state.CITIES.cities);

  const handleSettingsButtonClick = () => {
    setIsSettingsShow((isSettingsShow) => !isSettingsShow);
  };

  useEffect(() => {
    if (localStorage.getItem(WEATHER_CITY_NAMES)) {
      dispatch(setCities(JSON.parse(localStorage.getItem(WEATHER_CITY_NAMES) || JSON.stringify(CITIES_BY_DEFAULT))));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={s.section}>
      {!isSettingsShow && <WeatherCityList />}
      <button className={s.settings} type="button" onClick={handleSettingsButtonClick} aria-label="Settings">
        <img src={isSettingsShow ? CloseIcon : SettingsIcon} width={17} height={17} alt="weather icon" />
      </button>
      {isSettingsShow && <Settings />}
      {!isSettingsShow && cityList.length === 0 && <div className={s.text}>Add location using Settings</div>}
    </section>
  );
};

export default App;
