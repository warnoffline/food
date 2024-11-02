import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(config => {
    const queryParams = new URLSearchParams({
        apiKey: API_KEY,
    }).toString();

    config.url = `${config.url}?${queryParams}`;
    return config;
});

export default axiosInstance;
