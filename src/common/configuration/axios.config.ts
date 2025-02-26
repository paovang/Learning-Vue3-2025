import type { AxiosInstance } from "axios";
import axios from "axios";

export class AxiosApi {
  public axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: import.meta.env.VITE_APP_BASE_API_URL,
    });

    this.axios.interceptors.request.use(
      async (config: any) => {
        const accessToken = localStorage.getItem("accessToken");
        config.headers["Authorization"] = `Bearer ${accessToken}`;

        return config;
      },
      (error: any) => Promise.reject(error)
    );
  }
}
