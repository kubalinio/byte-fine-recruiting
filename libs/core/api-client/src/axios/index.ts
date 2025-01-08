import axios from "axios";
import { requestSuccessInterceptor } from "../interceptors/requestInterceptors";
import {
  responseFailureInterceptor,
  responseSuccessInterceptor,
} from "../interceptors/responseInterceptors";

export const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export const refreshTokenUrl = `${BASE_URL}/users/refresh-token`;

const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: BASE_URL,
});

axiosClient.interceptors.request.use(requestSuccessInterceptor);
axiosClient.interceptors.response.use(
  responseSuccessInterceptor,
  responseFailureInterceptor
);

export default axiosClient;
