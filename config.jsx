import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://192.168.10.16:5000/api/v1",
});

export default baseUrl;
