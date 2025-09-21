import axios, { AxiosInstance } from "axios";
import * as SecureStore from "expo-secure-store";

const API_BASE = "http://192.168.1.6:5000";

class ApiClient {
  private axios: AxiosInstance;

  constructor(baseURL = API_BASE) {
    this.axios = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
      timeout: 10000,
    });

    this.axios.interceptors.request.use(async (cfg) => {
      const token = await SecureStore.getItemAsync("access_token");
      if (token)
        cfg.headers = { ...cfg.headers, Authorization: `Bearer ${token}` };
      return cfg;
    });

    // Add response interceptor for error handling
    this.axios.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }

  async get<T = any>(url: string, params?: any): Promise<T> {
    const r = await this.axios.get<T>(url, { params });
    return r.data;
  }

  async post<T = any>(url: string, data?: any): Promise<T> {
    const r = await this.axios.post<T>(url, data);
    return r.data;
  }

  async put<T = any>(url: string, data?: any): Promise<T> {
    const r = await this.axios.put<T>(url, data);
    return r.data;
  }

  async delete<T = any>(url: string): Promise<T> {
    const r = await this.axios.delete<T>(url);
    return r.data;
  }
}

export const apiClient = new ApiClient();
export default apiClient;
