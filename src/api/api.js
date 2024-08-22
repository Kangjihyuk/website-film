import axios from "axios";

export const getAllDestinations = (callback) => {
  axios
    .get("https://freetestapi.com/api/v1/destinations")
    .then((res) => {
      callback(res.data);
    })
    .catch((res) => {
      console.log(res);
    });
};


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
