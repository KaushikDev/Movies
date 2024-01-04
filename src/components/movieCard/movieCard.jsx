import React, { useContext, useEffect , useState } from "react";
import "./movieCard.scss";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../common/store/Store";
import axios from "axios";
import { BASE_URL, MOVIE_API_KEY } from "../../common/apis/movieApi";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { Poster, imdbID } = movie;
  const { state, addMovieToWatchlist } = useContext(StoreContext);
  const { watchlist, favorites } = state;
  console.log("watchlist : ", watchlist);
  console.log("favorites : ", favorites);

  const isAvailableinWatchlist = () =>
    watchlist &&
    watchlist.length &&
    watchlist.filter((item) => item.imdbID === imdbID).length
      ? true
      : false;

  const setCurrentMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const handleAddMovieToWatchlist = async (e, id) => {
    e.stopPropagation();
    await axios
      .get(`${BASE_URL}/?apikey=${MOVIE_API_KEY}&i=${id}`)
      .then((res) =>
        res.data.Response === "True" ? addMovieToWatchlist(res.data) : null
      )
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="movieCardContainer">
      <div
        className="movieCard"
        style={{
          backgroundImage: `url(${
            Poster !== "N/A"
              ? Poster
              : "https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png"
          })`,
        }}
        onClick={() => setCurrentMovie(imdbID)}
      >
        <div className="movieCard__sideActionPanel">
          <div className="actionPanel__icon watchlist">
            <button
              className="btn__addToWatchlist"
              id={`addToWatchlistBtn_${imdbID}`}
              onClick={(e) => isAvailableinWatchlist() ? e.stopPropagation() : handleAddMovieToWatchlist(e, imdbID)}
            >
              {isAvailableinWatchlist() ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-plus"></i>
              )}
            </button>
          </div>
          <div className="actionPanel__icon favorite">
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
