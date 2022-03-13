import jwt_decode from "jwt-decode";

export const decodeJWT = (jwt) => {
  return jwt_decode(jwt);
};

export const storage = {
  getToken: () => localStorage.getItem("token"),
  setToken: (token) => localStorage.setItem("token", token),
  clearToken: () => localStorage.removeItem("token"),
};
