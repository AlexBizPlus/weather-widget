import React, { useRef, Ref, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddCities } from '../../store/actions/cities-actions';
import { RootState } from '../../store/reducers/root-reducer';
import EnterIcon from '../../img/icon-enter.svg';
import s from './SettingsInput.module.scss';
import { ICityList } from '../../types';

const SettingsInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const cityList = useSelector((state: RootState) => state.CITIES.cities);

  const handleAddButtonClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    if (inputRef?.current?.value && !cityList.find((item: ICityList) => item.name === inputRef?.current?.value)) {
      dispatch(setAddCities(inputRef?.current?.value));
    }
  };

  return (
    <form className={s.form}>
      <label className={s.label} htmlFor="addCityInput">
        <span className={s.title}>Add Location</span>
        <input
          type="text"
          autoComplete="false"
          placeholder="New York"
          id="addCityInput"
          ref={inputRef as Ref<HTMLInputElement>}
        />
      </label>
      <button className={s.button} type="submit" onClick={handleAddButtonClick} aria-label="add city">
        <img src={EnterIcon} width={16} height={16} alt="add city" />
      </button>
    </form>
  );
};
export default SettingsInput;
