import axios from "axios";

export const postNotice = (user, value) => {
  return axios.post(
    "https://notice-app-backend-production.up.railway.app/noticeboard/add",
    {
      description: value,
      user: user._id,
      date: new Date().toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
    },
  );
};
