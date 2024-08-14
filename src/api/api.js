import axios from "axios";

export const getSingleDestination = (callback) => {
  axios
    .get("https://freetestapi.com/api/v1/destinations?limit=4 ")
    .then((res) => {
      callback(res.data);
    })
    .catch((res) => {
      console.log(res);
    });
};
