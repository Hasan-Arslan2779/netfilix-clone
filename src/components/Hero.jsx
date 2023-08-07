import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../constant/constants";
const Hero = () => {
  // Abone olma işlemi(store'da tutulan verilere erişme)
  const state = useSelector((store) => store.movieReducer);
  // Dizinin uzunluğuna göre rastgele sayı bulma
  const i = Math.floor(Math.random() * state.popularMovies.length);
  // diziden rastgele bir film alma
  const film = state.popularMovies[i];
  // console.log(film);
  //  Yüklenme Sürüyor İse Ekrana basılır
  if (state.isLoading) return "Loading...";

  return (
    <div className="row p-4 d-flex mt-5">
      {/* Yükleme Bittiyse Ekrana Basılır */}
      {!state.isLoading && (
        <>
          <div className="col-md-6 mb-3 mt-5 gap-3 d-flex flex-column justify">
            <h1>{film.title}</h1>
            <p className="lead fw-bold">{film.overview}</p>
            <p className="text-danger fw-bold">IMDB: {film.vote_average}</p>
            <div className="gap-3 d-flex justify-content-center">
              <button type="button">Listeye Ekle</button>
              <button type="button">
                <Link to={`/movie/${film.id}`}>Filmz İzle</Link>
              </button>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <img
              className="img-fluid rounded mt-4 shadow"
              src={`${baseImgUrl}${film.backdrop_path}`}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
