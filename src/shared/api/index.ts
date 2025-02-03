import { E_LANGUAGES } from "@app/i18n";
import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import qs from "qs";

const httpClient = axios.create({
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

httpClient.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: "comma" });
  };

  config.headers = Object.assign(config.headers, {
    language: localStorage.getItem("i18nextLng") || E_LANGUAGES.uz,
  });

  return config;
});

type HttpRequestType = <R>(params: AxiosRequestConfig) => AxiosPromise<R>;

export type HandlerType<P, R> = (params: Partial<P>) => AxiosPromise<R>;

export const httpGet: HttpRequestType = (params) =>
  httpClient({
    method: "get",
    ...params,
  });

export const httpPost: HttpRequestType = (params) =>
  httpClient({
    method: "post",
    ...params,
  });
