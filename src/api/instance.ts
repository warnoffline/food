import axios from 'axios';

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  if (API_KEY) {
    const queryParams = new URLSearchParams({
      apiKey: API_KEY,
    }).toString();
    config.url = `${config.url}?${queryParams}`;
    return config;
  }
  return config;
});

export default axiosInstance;
