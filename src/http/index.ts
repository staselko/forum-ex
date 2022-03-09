/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios';

export const API_URL = 'http://localhost:5000';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

// $api.interceptors.response.use((config: AxiosResponse) => config, async (error) => {
//   if (error.response.status === 401) {
//     try {
// const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
//       localStorage.setItem('token', response.data.accessToken);
//       return $api.request(originalRequest);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// });

export default $api;
