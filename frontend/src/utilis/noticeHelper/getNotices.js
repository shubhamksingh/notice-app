import axios from "axios";

export const getNotices = () => {
  return axios.get(
    "https://notice-app-backend-production.up.railway.app/noticeboard",
  );
};
