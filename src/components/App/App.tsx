import React, { useState, useEffect } from 'react';
// import React, { lazy, Suspense } from 'react';
// import cl from 'clsx';
// import Skeleton from 'react-loading-skeleton';
// import s from './App.module.scss';
import WeatherCityList from '../WeatherCityList/WeatherCityList';
import Settings from '../Settings/Settings';

// const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));

const App = () => {
  const [isSettingsShow, setIsSettingsShow] = useState(false);

  const handleSettingsButtonClick = () => {
    setIsSettingsShow((isSettingsShow) => !isSettingsShow);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`main.js`);
  }, []);

  return (
    <section>
      {!isSettingsShow && <WeatherCityList />}
      <button type="button" onClick={handleSettingsButtonClick}>
        Settings
      </button>
      {isSettingsShow && <Settings />}
    </section>
  );
};

export default App;
