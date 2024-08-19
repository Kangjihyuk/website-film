import axios from "axios";

export const getSingleDestination = (id, callback) => {
  axios
    .get(`https://freetestapi.com/api/v1/destinations?limit=${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((res) => {
      console.log(res);
    });
};
