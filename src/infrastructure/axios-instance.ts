"use server";
import axios from "axios";

const axiosInstance = axios.create({});

export type Options = {
  url: string;
  data?: any;
};

export const getAPI = async (initData: string, options: Options) => {
  if (initData) {
    axiosInstance.defaults.headers.initdata = initData;
  }
  const onSuccess = (response: any) => {
    return response?.data;
  };
  const onError = async (error: any) => {
    console.log("🚀 ~ onError ~ error:", error?.response);
    return error?.response?.data;
  };
  return axiosInstance.get(options.url).then(onSuccess).catch(onError);
};

export const postAPI = async (initData: string, options: Options) => {
  if (initData) {
    axiosInstance.defaults.headers.initdata = initData;
  }
  const onSuccess = (response: any) => {
    return response?.data;
  };
  const onError = async (error: any) => {
    console.log("🚀 ~ onError ~ error:", error?.response);
    return error?.response?.data;
  };

  return axiosInstance
    .post(options.url, options?.data)
    .then(onSuccess)
    .catch(onError);
};

export const putAPI = async (initData: string, options: Options) => {
  if (initData) {
    axiosInstance.defaults.headers.initdata = initData;
  }
  const onSuccess = (response: any) => response?.data;
  const onError = async (error: any) => {
    console.log("🚀 ~ onError ~ error:", error?.response);
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
    console.log("🚀 ~ onError ~ error:", error?.response);
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
    console.log("🚀 ~ onError ~ error:", error?.response);
    return error?.response?.data;
  };

  return axiosInstance
    .delete(options.url, options?.data)
    .then(onSuccess)
    .catch(onError);
};
