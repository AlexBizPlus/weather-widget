import { BEAUFORT_SCALE, COMPASS_SECTORS } from './const';

const stringToNumber = (value: string | number) => (typeof value === 'string' ? +value : value);

export const performValue = (value: string | number, units: string, digitsAfter: number = 0) => {
  const newValue = stringToNumber(value);
  return `${Math.round(newValue).toFixed(digitsAfter)}${units === 'degrees' ? '\u00B0C' : units}`;
};

export const speedToBftScale = (speed: number) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < BEAUFORT_SCALE.length; i++) {
    const { min, max, description } = BEAUFORT_SCALE[i];
    if (speed >= min && speed > max) {
      return description;
    }
  }
  return 'Calm';
};

export const upFirstLetter = (str: string) => `${str[0].toUpperCase()}${str.substring(1)}`;

export const degToCompassSector = (deg: string | number) => {
  const degrees = stringToNumber(deg);
  return COMPASS_SECTORS[Math.round((degrees % 360) / 22.5)];
};

export const calculateDewPoint = (temp: string | number, humidity: string | number) => {
  const newTemp = stringToNumber(temp);
  const newHumidity = stringToNumber(humidity);

  return newTemp - (1 - newHumidity / 100) / 0.05;
};

export const indicateBarom = (pressure: string | number) => {
  const zeroValue = 1000;
  const minPressure = 933;
  const maxPressure = 1068;
  const newPressure = stringToNumber(pressure);

  if (newPressure <= minPressure) return -135;
  if (newPressure >= maxPressure) return 135;

  return zeroValue >= newPressure ? (zeroValue - newPressure) * -2 : (newPressure - zeroValue) * 2;
};
