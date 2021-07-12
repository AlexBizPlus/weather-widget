import React from 'react';
import { useSelector } from 'react-redux';
import SettingsList from '../SettingsList/SettingsList';
import SettingsInput from '../SettingsInput/SettingsInput';
import { RootState } from '../../store/reducers/root-reducer';
import s from './Settings.module.scss';
import { MAX_CITIES } from '../../const';

const Settings = () => {
  const cityList = useSelector((state: RootState) => state.CITIES.cities);

  return (
    <div className={s.settings}>
      <span className={s.title}>Settings</span>
      <SettingsList />
      {cityList.length < MAX_CITIES && <SettingsInput />}
    </div>
  );
};

export default Settings;
