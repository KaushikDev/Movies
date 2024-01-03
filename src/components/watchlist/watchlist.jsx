import React, { useContext } from "react";
import { StoreContext } from "../../common/store/Store";
import MovieListing from "../movieListing/movieListing";

const Watchlist = () => {
  const { state } = useContext(StoreContext);
  const { watchlist } = state;
  console.log(watchlist);

  return <MovieListing movies={watchlist} />;
};
export default Watchlist;
