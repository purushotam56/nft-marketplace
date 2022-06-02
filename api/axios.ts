import axios, { AxiosResponse as AxiosResponseType } from "axios";

import { API_URL } from "@/config/index";
import { isServer } from "@/utils/helper";

const instance = axios.create({ baseURL: API_URL });

instance.interceptors.request.use(
  (request) => {
    if (!isServer) console.debug("Request", request);
    else console.debug("Request", request.url);
    return request;
  },
  (error) => {
    if (!isServer) console.debug("Request Error", error);
    if (!isServer) console.debug("Request Failed", error.request.data.message);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    if (!isServer) console.debug("Response", response);
    else console.debug("Response", response.data.status, !!response.data.data);
    return response;
  },
  (error) => {
    if (!isServer) console.debug("Response Error", error.response.data.message);
    return Promise.reject(error);
  },
);

export default instance;

export type AxiosResponse = AxiosResponseType;
