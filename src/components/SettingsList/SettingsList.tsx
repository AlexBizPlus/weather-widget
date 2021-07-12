import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSortable } from 'react-sortablejs';
import { setCities } from '../../store/actions/cities-actions';
import { RootState } from '../../store/reducers/root-reducer';
import SettingsItem from '../SettingsItem/SettingsItem';
import s from './SettingsList.module.scss';
import { ICityList } from '../../types';
import { WEATHER_CITY_NAMES } from '../../const';

const SettingsList = () => {
  const dispatch = useDispatch();
  const cityList = useSelector((state: RootState) => state.CITIES.cities);
  const [state, setState] = useState<ICityList[]>(cityList);

  useEffect(() => {
    setState(cityList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityList.length]);

  useEffect(() => {
    dispatch(setCities(state));
    localStorage.setItem(WEATHER_CITY_NAMES, JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <ReactSortable tag="ul" className={s.list} list={state} setList={setState}>
      {state.map((item) => (
        <li key={item.name}>
          <SettingsItem cityName={item.name} />
        </li>
      ))}
    </ReactSortable>
  );
};
export default SettingsList;
