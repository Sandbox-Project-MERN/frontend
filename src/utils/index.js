import jwt_decode from "jwt-decode";
import axios from "axios";

export const decodeJWT = (jwt) => {
  return jwt_decode(jwt);
};

export const axiosWithAuth = () => {
  const token = storage.getToken();

  return axios.create({
    headers: {
      authorization: token ? token : "",
    },
    baseURL: "http://localhost:8000/api",
  });
};

export const storage = {
  getToken: () => localStorage.getItem("token"),
  setToken: (token) => localStorage.setItem("token", `bearer ${token}`),
  clearToken: () => localStorage.removeItem("token"),
};

export const getInitials = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .map((v) => v && v[0].toUpperCase())
    .join("");

export const capitalizeName = (name = "") =>
  name
    .split(" ")
    .map((v) => v.toLowerCase())
    .map((v) => v[0].toUpperCase() + v.slice(1))
    .join(" ");
