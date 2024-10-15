import React, { useContext } from "react";
import { StoreContext } from "../../common/store/Store";
import MovieListing from "../../components/movieListing/movieListing";

const Watchlist = () => {
  const { state } = useContext(StoreContext);
  const { watchlist } = state;

  return <MovieListing movies={watchlist}  message="No movies in Watchlist yet!!"/>;
};
export default Watchlist;
