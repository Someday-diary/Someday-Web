import axios, { AxiosError } from "axios";

import RECRUIT_SERVER from 'src/config/config.json';

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