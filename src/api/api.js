import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2cfff2975bb4dce01c3fdf3e6356e648";

export const getAllMovie = (callback) => {
  axios
    .get(`${BASE_URL}/movie/popular?page=1&api_key=${API_KEY}`)
    .then((res) => {
      callback(res.data.results); // Adjusted to pass the array of popular movies
    })
    .catch((error) => {
      console.log("Error fetching popular movies:", error);
    });
};
