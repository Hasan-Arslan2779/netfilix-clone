import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import ListMOvies from "../components/ListMOvies";
import { setLoading, getMovies, getGenres } from "../redux/action/action";

const MainPage = () => {
  const state = useSelector((store) => store.movieReducer);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    // Loadingi true Yapar
    dispatch(setLoading(true));
    // Popüler Film Verisini Çek ve store aktar
    dispatch(getMovies());
    dispatch(getGenres());
  }, []);
  return (
    <div>
      <Hero />
      {state.genres.map((genre) => (
        <ListMOvies key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
