import jwt_decode from "jwt-decode";

export const decodeJWT = (jwt) => {
  return jwt_decode(jwt);
};

export const storage = {
  getToken: () => localStorage.getItem("token"),
  setToken: (token) => localStorage.setItem("token", token),
  clearToken: () => localStorage.removeItem("token"),
};

export const getInitials = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");

export const capitalizeName = (name = "") =>
  name
    .split(" ")
    .map((v) => v.toLowerCase())
    .map((v) => v[0].toUpperCase() + v.slice(1))
    .join(" ");
