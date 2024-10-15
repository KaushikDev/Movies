import React from "react";
import MovieCard from "../movieCard/movieCard";
import { useLocation } from "react-router-dom";

import "./movieListing.scss";
import GoHome from "../goHome/goHome";

const MovieListing = ({ movies, message }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="movieListContainer">
      {movies && movies.length ? (
        movies.map((movie, index) => <MovieCard movie={movie} key={index} />)
      ) : (
        <div className="noShow">
          <h3>{message} </h3> {pathname !== ("/" || "") ? <GoHome /> : null}
        </div>
      )}
    </div>
  );
};

export default MovieListing;
