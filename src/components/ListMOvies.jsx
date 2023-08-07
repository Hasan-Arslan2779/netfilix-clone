import { useEffect, useState } from "react";
import axios from "axios";
import { baseImgUrl, options } from "../constant/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const ListMOvies = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`/discover/movie?with_genres=${genre.id}`, options)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="p-4">
      <h1 className="my-5 text-center  ">{genre.name}</h1>
      <div>
        <Splide
          options={{
            autoWidth: true,
            gap: "10px",
            pagination: false,
          }}
        >
          {movies.map((movi) => (
            <SplideSlide key={movi.id}>
              <Link to={`/movie/${movi.id}`}>
                <img
                  className="movie"
                  src={`${baseImgUrl}${movi.poster_path}`}
                />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default ListMOvies;
