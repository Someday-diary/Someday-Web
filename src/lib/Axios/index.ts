import axios, { AxiosError, AxiosInstance } from "axios";

import RECRUIT_SERVER from 'src/config/config.json';

export const request: AxiosInstance = axios.create({
  baseURL: RECRUIT_SERVER.RECRUIT_SERVER,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export let instance = axios.create({
  baseURL: RECRUIT_SERVER.RECRUIT_SERVER
});

instance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (err: AxiosError) {
    return Promise.reject(err);
  }
)