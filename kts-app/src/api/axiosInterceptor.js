import axios from "axios";

// CREATING AXIOS INSTANCE
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
    }
  });

// Function to get the JWT token from storage (e.g., localStorage)
const getToken = () => localStorage.getItem('access'); 

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const access = getToken();
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;