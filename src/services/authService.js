import http from "./httpService";
import jwtDecode from "jwt-decode";
import {
  config
} from "../config";

const apiEndpoints = config.apiUrl + "/auth";
const tokenKey = "Token";

//http.setJwt(getJwt());

export async function login(email, password) {
  const {
    data: jwt
  } = await http.post(apiEndpoints, {
    email,
    password
  });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout(params) {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser(params) {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt(params) {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
}