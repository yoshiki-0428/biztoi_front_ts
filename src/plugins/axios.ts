import axios, { AxiosInstance } from "axios";
import { BiztoiApi } from "@/axios/biztoi";
import { RakutenBooksTotalApi } from "@/axios/books";

const apiAxios: AxiosInstance = axios.create({
  withCredentials: true
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
export const booksApi = new RakutenBooksTotalApi(
  undefined,
  undefined,
  booksAxios
);
