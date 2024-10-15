import React, { useContext } from "react";
import MovieListing from "../../components/movieListing/movieListing";
import SearchMovie from "../../components/searchMovie/searchMovie";
import { StoreContext } from "../../common/store/Store";
import "./home.scss";

const Home = () => {
  const { state } = useContext(StoreContext);
  const { search } = state;
  const {movies, searchedMovie, message} = search;

  return (
    <div className="homeContainer">
      <h1>Movie Library</h1>
      <SearchMovie searchTerm={searchedMovie}/>
      <MovieListing movies={movies} message={`${message}`} />
    </div>
  );
};

export default Home;
