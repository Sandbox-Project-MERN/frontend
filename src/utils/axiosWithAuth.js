import axios from "axios";
import storage from "./localStorage";

const axiosWithAuth = () => {
  const token = storage.getToken();

  return axios.create({
    headers: {
      authorization: token ? token : "",
    },
    baseURL: "http://localhost:8000/api",
  });
};

export default axiosWithAuth;
