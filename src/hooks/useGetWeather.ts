import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { getWeatherFetch } from '../services/getWeatherFetch';
import { ICurrent, IDaily } from '../pages/Home/models';

export interface ICoordinates {
  lat: number | null;
  lon: number | null;
  geoLocalizeError?: boolean | null;
}
interface IUseGetWeatherResponse {
  weatherData?: IGetWeatherResponse;
  loading: boolean;
  error: string;
}

interface IGetWeatherResponse {
  current: ICurrent;
  daily: IDaily[];
}

interface IError {
  message: string;
}

const useGetWeather = (cityCoordinates: ICoordinates): IUseGetWeatherResponse => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [weatherData, setWeatherData] = useState<IGetWeatherResponse>();

  useEffect(() => {
    if (cityCoordinates.lat !== null && cityCoordinates.lon !== null) {
      setLoading(true);
      getWeatherFetch({
        lat: cityCoordinates.lat,
        lon: cityCoordinates.lon,
        exclude: 'minutely,hourly,alerts',
        units: 'metric',
        lang: 'es',
        appid: '115aa0efd0697e742981f9e7a5539198'
      })
        .then((res: AxiosResponse<IGetWeatherResponse>) => {
          setLoading(false);
          setWeatherData(res.data);
        })
        .catch((err: IError) => {
          setLoading(false);
          setError(err.message);
        });
    }
  }, [cityCoordinates.lat, cityCoordinates.lon]);

  return { weatherData, loading, error };
};

export default useGetWeather;
