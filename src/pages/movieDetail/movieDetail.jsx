import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../common/store/Store";
import { BASE_URL, MOVIE_API_KEY } from "../../common/apis/movieApi";

import axios from "axios";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { state } = useContext(StoreContext);
  const { currentMovie } = state;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/?apikey=${MOVIE_API_KEY}&i=${currentMovie}`)
      .then((res) => setMovieDetail(res));
  }, [currentMovie]);

  return (
    <div className="movieDetailContainer">
      { Object.keys(movieDetail).length ? (
        <>
          <section className="moviePoster"></section>
          <section className="movieDetails">
            <h1>{movieDetail.Title}</h1>
            <h2>Collection : {movieDetail.BoxOffice}</h2>
            <h3>Genre : {movieDetail.Genre}</h3>
            <h2>Directed by : {movieDetail.Director}</h2>
            <h1>IMDB rating : {movieDetail.imdbRating}</h1>
            <h1>Year : {movieDetail.Year}</h1>
            <h1>Awards : {movieDetail.Awards}</h1>
            <h1>Actors : {movieDetail.Actors}</h1>
          </section>
        </>
      ) : (
        <h1>No Movie Details present!!</h1>
      )}
    </div>
  );
};

export default MovieDetail;
