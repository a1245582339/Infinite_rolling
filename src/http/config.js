import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// request拦截器
axiosInstance.interceptors.request.use(
  config => config,
  error => error,
);

// response拦截器
axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    console.log(error.response);

    if (error.response.status === 401) {
      setTimeout('location.href = location.origin', 1000);
    }
    if (error.response.status === 400 && error.response.data.errors.status_code === '20000') {
      setTimeout("location.href = '/dehuinet#menus'", 1000);
    }
    return Promise.reject(error.response);
  },
);
export default axiosInstance;