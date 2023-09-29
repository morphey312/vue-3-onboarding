import axios  from "axios";

const axiosInstance = axios.create({
    baseURL: "http://fakestoreapi.com",
    headers: {'Content-Type': 'application/json'},
});

export default axiosInstance;