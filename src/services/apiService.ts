import axios, { AxiosInstance } from "axios";

import { BASE_URL } from "@/config/app.config";

const axiosInstance = (
  h?: Record<string, string>,
  isFullAxiosResponse: boolean = false
): AxiosInstance => {
  const headers: Record<string, string> = {
    ...h,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 30 * 1000,
    headers,
  });

  instance.interceptors.response.use(
    (response) => {
      if (isFullAxiosResponse) return response;
      return response.data;
    },
    (error) => {
      return Promise.reject(error?.response?.data);
    }
  );

  return instance;
};

export default axiosInstance;
