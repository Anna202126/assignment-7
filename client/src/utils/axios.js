import axios from "axios";

let token = JSON.parse(localStorage.getItem("token")).token;

console.log(token);

export const axiosConfig = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
