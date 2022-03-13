import jwt_decode from "jwt-decode";

export const decodeJWT = (jwt) => {
  return jwt_decode(jwt);
};
