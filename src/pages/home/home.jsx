import React, { useContext } from "react";
import MovieListing from "../../components/movieListing/movieListing";
import SearchMovie from "../../components/searchMovie/searchMovie";
import { StoreContext } from "../../common/store/Store";

const Home = () => {
  const { state } = useContext(StoreContext);
  const { search } = state;
  const {movies, searchedMovie, message} = search;

  return (
    <div>
      <h1>Your Personal Movie Library</h1>
      <SearchMovie searchTerm={searchedMovie}/>
      <MovieListing movies={movies} message={message}/>
    </div>
  );
};

export default Home;
