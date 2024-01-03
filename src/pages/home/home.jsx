import React, { useContext } from "react";
import MovieListing from "../../components/movieListing/movieListing";
import SearchMovie from "../../components/searchMovie/searchMovie";
import { StoreContext } from "../../common/store/Store";

const Home = () => {
  const { state } = useContext(StoreContext);
  const { movies } = state;

  return (
    <div>
      <h1>Your Personal Movie Library</h1>
      <SearchMovie />
      <MovieListing movies={movies} />
    </div>
  );
};

export default Home;
