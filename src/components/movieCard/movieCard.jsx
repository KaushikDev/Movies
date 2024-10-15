import React, { useContext } from "react";
import "./movieCard.scss";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../common/store/Store";
import {
  checkIdExistsInArray,
  handleAddMovieToList,
  handleRemoveMovieFromList,
} from "../../common/utils/utils";
import { DEFAULT_IMAGE } from "../../common/constants/constants";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { Poster, imdbID } = movie;
  const {
    state,
    addMovieToWatchlist,
    removeMovieFromWatchlist,
    addMovieToFavorites,
    removeMovieFromFavorites,
  } = useContext(StoreContext);
  const { watchlist, favorites } = state;

  return (
    <div className="movieCardContainer">
      <div
        className="movieCard"
        style={{
          backgroundImage: `url(${
            Poster !== "N/A"
              ? Poster
              : DEFAULT_IMAGE
          })`,
        }}
        onClick={() => navigate(`/movie/${imdbID}`)}
      >
        <div className="movieCard__sideActionPanel">
          <div className="actionPanel__icon watchlist">
            <button
              className="btn__addToWatchlist"
              id={`addToWatchlistBtn_${imdbID}`}
              onClick={(e) =>
                checkIdExistsInArray(watchlist, imdbID)
                  ? handleRemoveMovieFromList(
                      e,
                      imdbID,
                      watchlist,
                      removeMovieFromWatchlist
                    )
                  : handleAddMovieToList(e, movie, addMovieToWatchlist)
              }
            >
              {checkIdExistsInArray(watchlist, imdbID) ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-plus"></i>
              )}
            </button>
          </div>
          <div className="actionPanel__icon favorite">
            <button
              className="btn__addToFavorites"
              id={`addToFavoritesBtn_${imdbID}`}
              onClick={(e) =>
                checkIdExistsInArray(favorites, imdbID)
                  ? handleRemoveMovieFromList(
                      e,
                      imdbID,
                      favorites,
                      removeMovieFromFavorites
                    )
                  : handleAddMovieToList(e, movie, addMovieToFavorites)
              }
            >
              {checkIdExistsInArray(favorites, imdbID) ? (
                <i className="fa-solid fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
