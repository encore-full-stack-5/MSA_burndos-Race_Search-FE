import axios from "axios";

export const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: "http://localhost:8080/api/",
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  (error) => {
    console.error("Full errordata:", JSON.stringify(error, null, 2)); // Pretty print the JSO
    return Promise.reject(error);
  }
);

export default axiosInstance;
