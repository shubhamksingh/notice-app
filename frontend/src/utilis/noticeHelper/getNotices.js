import axios from "axios";

export const getNotices = status => {
  return axios.get(
    "https://notice-app-backend-production.up.railway.app/noticeboard",
  );
};
