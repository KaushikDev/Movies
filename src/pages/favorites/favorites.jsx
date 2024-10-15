import React, { useContext } from "react";
import { StoreContext } from "../../common/store/Store";
import MovieListing from "../../components/movieListing/movieListing";

const Favorites = () => {
  const { state } = useContext(StoreContext);
  const { favorites } = state;

  return <MovieListing movies={favorites} message="No movies in Favorites yet!!" />;
};
export default Favorites;
