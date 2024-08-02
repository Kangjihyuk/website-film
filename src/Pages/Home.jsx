import React, { useEffect, useState } from "react";
import { getAllMovie } from "../api/api";

const Home = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getAllMovie((data) => {
      setMovie(data);
    });
  }, []);
  console.log(movie);

  return <div></div>;
};

export default Home;
