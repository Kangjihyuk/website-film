import { useEffect } from "react";
import { getAllMovie } from "../api/api";
import { useState } from "react";

const Home = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getAllMovie((data) => {
      setMovie(data);
    });
  }, []);
  console.log(movie);
  return (
    <div>
      {movie.map((data) => (
        <ul key={data.id}>
          <li>{data.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
