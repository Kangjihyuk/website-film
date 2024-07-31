import axios from "axios";

export const getAllMovie = (callback) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=f7266c4f&`)
    .then((res) => {
      callback(res.data);
    })
    .catch((res) => {
      console.log(res);
    });
};
