import React from 'react';
import { useDispatch } from 'react-redux';
import cl from 'clsx';
import { ISettingsItem } from '../../types';
import { setRemoveCities } from '../../store/actions/cities-actions';
import MenuIcon from '../../img/icon-menu.svg';
import DeleteIcon from '../../img/icon-delete.svg';
import s from './SettingsItem.module.scss';

const SettingsItem = ({ cityName }: ISettingsItem) => {
  const dispatch = useDispatch();

  const handleRemoveButtonClick = () => {
    dispatch(setRemoveCities(cityName));
  };

  return (
    <div className={s.item} id={cityName}>
      <button className={cl(s.button, 'handle')} type="button" aria-label="change order">
        <img className={s.handle} src={MenuIcon} width={12} height={12} alt="weather icon" />
      </button>
      <span>{cityName}</span>
      <button className={s.deleteButton} type="button" onClick={handleRemoveButtonClick} aria-label="remove city">
        <img className={s.img} src={DeleteIcon} width={13} height={16} alt="weather icon" />
      </button>
    </div>
  );
};
export default SettingsItem;
