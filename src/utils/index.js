import jwt_decode from "jwt-decode";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const decodeJWT = (jwt) => {
  return jwt_decode(jwt);
};

export const axiosWithAuth = () => {
  const token = storage.getToken();

  return axios.create({
    headers: {
      authorization: token ? token : "",
    },
    baseURL: BACKEND_URL,
  });
};

export const storage = {
  getToken: () => {
    if (typeof window !== "undefined") return localStorage.getItem("token");
  },
  setToken: (token) => {
    if (typeof window !== "undefined")
      localStorage.setItem("token", `bearer ${token}`);
  },
  clearToken: () => {
    if (typeof window !== "undefined") localStorage.removeItem("token");
  },
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
