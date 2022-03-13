import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token ? token : "",
    },
    baseURL: "http://localhost:8080/api",
  });
};

export default axiosWithAuth;
