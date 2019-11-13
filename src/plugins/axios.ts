import axios, { AxiosInstance } from "axios";
import { DefaultApi } from "@/axios/biztoi";
import { VolumesApi } from "@/axios/books";
import { BASE_PATH } from "@/axios/books/base";

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

const booksAxios: AxiosInstance = axios.create();
export const booksApi = new VolumesApi(
  undefined,
  "https://www.googleapis.com/books/v1".replace(/\/+$/, ""),
  booksAxios
);
