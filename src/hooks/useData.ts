import useSWR from 'swr';
import { BACKEND_URL, API_KEY } from '../api/const';
import { fetcher } from '../api/api';
import { IUseData } from '../types';

export default function useData(cityName: string) {
  const { data, error, mutate } = useSWR(`${BACKEND_URL}?q=${cityName}&appid=${API_KEY}&units=metric`, fetcher);

  const loading = !data && !error;

  return {
    loading,
    error,
    data,
    mutate,
  } as IUseData;
}
