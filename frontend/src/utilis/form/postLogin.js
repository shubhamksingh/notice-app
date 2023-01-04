import axios from "axios";

export const postLogin = username => {
  return axios.post(
    "https://notice-app-backend-production.up.railway.app/users/login",
    { username },
  );
};
