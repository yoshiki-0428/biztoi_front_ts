import axios, { AxiosInstance } from "axios";
import { BiztoiApi } from "@/axios/biztoi";
import { dialogModule } from "@/store/DialogModule";

const apiAxios: AxiosInstance = axios.create({
  withCredentials: true
});

apiAxios.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // 認証エラー
      if (error.response.status === 401) {
        dialogModule.showDialogNeedLogin();
      }
    }
  }
);

export const baseApi: BiztoiApi = new BiztoiApi(
  undefined,
  process.env.VUE_APP_API_BASE_URL,
  apiAxios
);
