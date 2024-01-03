import React from "react";
import MovieCard from '../movieCard/movieCard';

import "./movieListing.scss";

const MovieListing = ({movies}) => {

  return (
    <div className="movieListContainer">
      {movies && movies.length ? movies.map((movie, index) => <MovieCard movie={movie} key={index}/>) : "There are no movies yet!!"}
    
    </div>
  );
};

export default MovieListing;
