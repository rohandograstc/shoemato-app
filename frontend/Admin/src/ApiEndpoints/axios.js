import axios from "axios";
import { handleTokenExpiration, refreshToken } from '../Utility/auth';

const axiosClient = axios.create({
  baseURL: "http://example.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      const token = await refreshToken();
      if (token) {
        const { config } = error;
        config.headers.Authorization = `Bearer ${token}`;
        return axiosClient.request(config);
      } else {
        handleTokenExpiration();
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
