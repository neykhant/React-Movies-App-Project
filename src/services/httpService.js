import axios from "axios";
import logger from "./loggingService";
import auth from "./authService";

axios.defaults.headers.common['x-auth-token']=auth.getJwt();

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
   if (!expectedError) {
    logger.log(error);
    alert("Unexpected error occured!");
  }

  return Promise.reject(error);
});

// export function setJwt(jwt) {
//   axios.defaults.headers.common['x-auth-token']= jwt; 
// }

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  //setJwt,
};
