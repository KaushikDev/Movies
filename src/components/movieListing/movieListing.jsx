import React, {useContext, useEffect, useState} from "react";
import MovieCard from '../movieCard/movieCard';
import { StoreContext } from "../../common/store/Store";


const MovieListing = () => {
  const [movieResults, setMovieResults] = useState([]);
  const {state} = useContext(StoreContext);
  console.log(state)
  const {movies} = state;

  useEffect(()=> {
   setMovieResults(movies);
  }, [movies])

  return (
    <div className="movieListingContainer">
      {movieResults && movieResults.length ? movieResults.map((movie, index) => <MovieCard movie={movie} key={index}/>) : "no search results yet!!"}
 
    </div>
  );
};

export default MovieListing;
