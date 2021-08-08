import { BASE_GRAPH_API } from '@/constant/http';
import { getToken } from '@next-dev/core/es/authority';
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_GRAPH_API,
  method: 'POST',
});

instance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    if (getToken()) {
      config.headers = {
        'api-key': getToken()?.refreshToken as string,
        Authorization: `Bearer ${getToken()?.token}`,
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    if (response.data.error && +response.data.error !== 0) {
      return Promise.reject(response.data);
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  },
);

export { instance as axiosRequest };
