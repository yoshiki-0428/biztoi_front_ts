import axios, { AxiosInstance } from "axios";
import { Configuration, DefaultApi } from "@/axios";

const apiAxios: AxiosInstance = axios.create({
  headers: {
    Authorization: "Bearer This.is.Authorization"
  }
});

apiAxios.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // eslint-disable-next-line no-console
      console.log(error.response);
      // 認証エラー
      // if (error.response.status === 401) {
      //   location.href = `${process.env.VUE_APP_API_BASE_URL}auth/login`;
      // }
    }
  }
);

export const baseApi: DefaultApi = new DefaultApi(
  undefined,
  process.env.VUE_APP_API_BASE_URL,
  apiAxios
);
