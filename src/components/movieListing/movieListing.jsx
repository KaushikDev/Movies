import React, {useContext, useEffect, useState} from "react";
import MovieCard from '../movieCard/movieCard';
import { StoreContext } from "../../common/store/Store";
import "./movieListing.scss";

const MovieListing = () => {
  const [movieResults, setMovieResults] = useState([]);
  const {state} = useContext(StoreContext);
  const {movies} = state;

  useEffect(()=> {
   setMovieResults(movies);
  }, [movies])

  return (
    <div className="movieListContainer">
      {movieResults && movieResults.length ? movieResults.map((movie, index) => <MovieCard movie={movie} key={index}/>) : "no search results yet!!"}
 
    </div>
  );
};

export default MovieListing;
