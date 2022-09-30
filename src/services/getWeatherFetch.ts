import axios, { AxiosResponse } from 'axios';
import { URL_BASE } from './settings';
import { IGetWeatherParams, IGetWeatherResponse } from '../pages/Home/models';

export const getWeatherFetch = async (params: IGetWeatherParams): Promise<AxiosResponse<IGetWeatherResponse>> => {
  return await axios.get<IGetWeatherResponse>(`${URL_BASE}/data/2.5/onecall`, { params });
};
