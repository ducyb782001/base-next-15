import { FAKE_INIT_DATA } from "@/constants";
import { SupportedProductEnv } from "@/constants/enum/env.enum";
import axios from "axios";

const axiosInstance = axios.create({});

export function getInitData() {
  if (process.env.NEXT_PUBLIC_ENV === SupportedProductEnv.LOCAL) {
    return FAKE_INIT_DATA;
  }
  const WebApp = (window as any)?.Telegram?.WebApp;

  if (WebApp) {
    return WebApp.initData;
  }
  return "No init data";
}

export type Options = {
  url: string;
  data?: any;
};

export const getAPI = async (options: Options) => {
  const initData = getInitData();
  if (initData) {
    axiosInstance.defaults.headers.initdata = initData;
  }
  const onSuccess = (response: any) => {
    return response?.data;
  };
  const onError = async (error: any) => {
    return error?.response?.data;
  };
  return axiosInstance.get(options.url).then(onSuccess).catch(onError);
};

export const postAPI = async (options: Options) => {
  const initData = getInitData();
  if (initData) {
    axiosInstance.defaults.headers.initdata = initData;
  }
  const onSuccess = (response: any) => {
    return response?.data;
  };
  const onError = async (error: any) => {
    return error?.response?.data;
  };

  return axiosInstance
    .post(options.url, options?.data)
    .then(onSuccess)
    .catch(onError);
};

export const putAPI = async (options: Options) => {
  const initData = getInitData();
  if (initData) {
    axiosInstance.defaults.headers.initdata = initData;
  }
  const onSuccess = (response: any) => response?.data;
  const onError = async (error: any) => {
    return error?.response?.data;
  };

  return axiosInstance
    .put(options.url, options?.data)
    .then(onSuccess)
    .catch(onError);
};

export const patchAPI = async (initData: string, options: Options) => {
  if (initData) {
    axiosInstance.defaults.headers.initdata = initData;
  }
  const onSuccess = (response: any) => response?.data;
  const onError = async (error: any) => {
    return error?.response?.data;
  };

  return axiosInstance
    .patch(options.url, options?.data)
    .then(onSuccess)
    .catch(onError);
};

export const deleteAPI = async (initData: string, options: Options) => {
  if (initData) {
    axiosInstance.defaults.headers.initdata = initData;
  }
  const onSuccess = (response: any) => response?.data;
  const onError = async (error: any) => {
    return error?.response?.data;
  };

  return axiosInstance
    .delete(options.url, options?.data)
    .then(onSuccess)
    .catch(onError);
};
