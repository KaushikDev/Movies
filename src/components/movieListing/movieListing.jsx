import React from "react";
import MovieCard from "../movieCard/movieCard";

import "./movieListing.scss";

const MovieListing = ({ movies, message }) => {
  return (
    <div className="movieListContainer">
      {movies && movies.length ? (
        movies.map((movie, index) => <MovieCard movie={movie} key={index} />)
      ) : (
        <h3>{message}</h3>
      )}
    </div>
  );
};

export default MovieListing;
