import React from "react";
import "./movieCard.scss";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { Poster, imdbID } = movie;

  const setCurrentMovie =  (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div
      className="movieCard"
      style={{ backgroundImage: `url(${Poster})` }}
      onClick={() => setCurrentMovie(imdbID)}
    >
      <div className="movieCard__sideActionPanel">
        <div className="actionPanel__icon watchlist">
          <i className="fa-solid fa-check"></i>
        </div>
        <div className="actionPanel__icon favorite">
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
