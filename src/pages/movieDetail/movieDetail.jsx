import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../common/store/Store";
import { BASE_URL, MOVIE_API_KEY } from "../../common/apis/movieApi";

import axios from "axios";
import { useParams } from "react-router-dom";
import "./movieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const { setCurrentMovie, state } = useContext(StoreContext);
  const { currentMovie } = state;
  console.log(currentMovie);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/?apikey=${MOVIE_API_KEY}&i=${imdbID}`)
      .then((res) =>
        res.data.Response === "True"
          ? setCurrentMovie(res.data)
          : setCurrentMovie({})
      )
      .catch((err) => {
        console.log(err);
        setCurrentMovie({});
      });
  }, [imdbID]);

  return (
    <div className="movieDetailContainer">
      {Object.keys(currentMovie).length !== 0 ? (
        <>
          <div
            className="moviePoster"
            style={{ backgroundImage: `url(${currentMovie.Poster})` }}
          ></div>
          <div className="movieDetails">
            <h1 className="movieDetails__title">{currentMovie.Title}</h1>
            <h4 className="movieDetails__genre">
              <i className="fa-regular fa-circle-question"></i> {currentMovie.Genre}
            </h4>
            <h4 className="movieDetails__collection">
              <i className="fa-solid fa-dollar"></i> {currentMovie.BoxOffice}
            </h4>
            <h4 className="movieDetails__director">
              <i className="fa-solid fa-video"></i> {currentMovie.Director}
            </h4>
            <h4 className="movieDetails__rating">
              <i className="fa-solid fa-star"></i> {currentMovie.imdbRating}
            </h4>
            <h4 className="movieDetails__year">
              <i className="fa-solid fa-calendar-days"></i> {currentMovie.Year}
            </h4>
            <h4 className="movieDetails__awards">
              <i className="fa-solid fa-award"></i> {currentMovie.Awards}
            </h4>
            <h3 className="movieDetails__cast">
              <i className="fa-solid fa-people-group"></i> {currentMovie.Actors}
            </h3>
          </div>
        </>
      ) : (
        <h1>Whoops! No movie was found!</h1>
      )}
    </div>
  );
};

export default MovieDetail;
