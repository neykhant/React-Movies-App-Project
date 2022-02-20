import http from "./httpService";
import { config } from "../config";

const apiEndpoints = config.apiUrl + "/genres";

export function getGenres() {
  return http.get(apiEndpoints);
}
