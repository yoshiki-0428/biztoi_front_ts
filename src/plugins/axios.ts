import axios, { AxiosInstance } from "axios";
import { BiztoiApi } from "@/axios/biztoi";
import { VolumesApi } from "@/axios/books";

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

export const baseApi: BiztoiApi = new BiztoiApi(
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
