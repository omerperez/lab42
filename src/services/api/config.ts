import axios, { AxiosResponse } from "axios";

export const onResponse = <T>({ data }: AxiosResponse<T>) => {
  return data;
};

const clientApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

clientApi.interceptors.response.use(onResponse);

export { clientApi };
