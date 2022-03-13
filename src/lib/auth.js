import { initReactQueryAuth } from "react-query-auth";
import { access, getUserProfile } from "../query-functions";
import { decodeJWT } from "../utils";
import storage from "../utils/localStorage";

export async function handleUserResponse(data) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function loadUser() {
  //   let user = null;
  //   if (storage.getToken()) {
  //     const data = await getUserProfile("622d7301b4b502e33d843ad4");
  //     user = data;
  //   }
  //   return user;
}

async function loginFn(data) {
  const { authToken } = await access(data, "login");

  return decodeJWT(authToken);
}

async function registerFn(data) {
  const response = await access(data, "register");
  return response;
}

async function logoutFn() {
  storage.clearToken();
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  waitInitial: false,
};

const { AuthProvider, useAuth } = initReactQueryAuth(authConfig);

export { AuthProvider, useAuth };
