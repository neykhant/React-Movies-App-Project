import http from "./httpService";
import { config } from "../config";

const apiEndpoints = config.apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoints, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
