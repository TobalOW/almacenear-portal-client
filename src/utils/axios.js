import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://apidos.almacenear.cl/api",
});

export default axiosInstance;
