/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthResponse } from '../redux/Interfaces';

export const API_URL = 'http://localhost:5000';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use((config: AxiosResponse) => config, async (error) => {
  console.log(error.response.data.message);
  if (error.response.status === 400) {
    throw Error(error.response.message);
  }
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return $api.request(originalRequest);
    } catch (e) {
      throw new Error('НЕ АВТОРИЗОВАН');
    }
  }
  throw error;
});

export default $api;
