import { initReactQueryAuth } from "react-query-auth";
import { access, getUserProfile } from "../query-functions";
import { storage, decodeJWT } from "../utils";

export async function handleUserResponse(data) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function loadUser() {
  const { user_id } = decodeJWT(storage.getToken());

  return await getUserProfile(user_id);
}

async function loginFn(data) {
  const { authToken } = await access(data, "login");

  const { user_id } = decodeJWT(authToken);

  return await getUserProfile(user_id);
}

async function registerFn(data) {
  const { authToken } = await access(data, "register");

  const { user_id } = decodeJWT(authToken);

  return await getUserProfile(user_id);
}

async function logoutFn() {
  // storage.clearToken();
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
