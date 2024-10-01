import axios from "axios";
import { customLogic } from "./use-hook";

const api = axios.create({
  baseURL: "http://www.ericktest.com",
});

/** Response Interceptors */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const custom: any = customLogic();
    custom.customLogicTest(error);
    return Promise.reject(error);
  }
);

export default api;
