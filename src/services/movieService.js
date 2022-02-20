import http from "./httpService";
import { config } from "../config";

const apiEndpoints = config.apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndpoints);
}

export function getMovie(id) {
  return http.get(apiEndpoints + "/" + id);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(apiEndpoints + "/" + movie._id, body);
  }

  return http.post(apiEndpoints, movie);
}


export function deleteMovie(id) {
  return http.delete(apiEndpoints + '/' + id );
}
