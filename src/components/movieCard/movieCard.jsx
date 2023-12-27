import React, { useContext } from "react";
import "./movieCard.scss";
import { StoreContext } from "../../common/store/Store";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { Title, Poster, Year, Type, imdbID } = movie;
  const { currentMovie } = useContext(StoreContext);

  const setCurrentMovie = async (movieId) => {
    await currentMovie(movieId);
    navigate(`/movie/${movieId}`);
  };

  return (
    <div
      className="movieCard"
      style={{ backgroundImage: `url(${Poster})` }}
      onClick={() => setCurrentMovie(imdbID)}
    >
      {/* <h3>{Title}</h3>
      <h4>{Type}</h4>
      <h5>{Year}</h5> */}

      <div className="movieCard__sideActionPanel">
        <div className="actionPanel__icon watchlist">
          <i className="fa-solid fa-check"></i>
        </div>
        <div className="actionPanel__icon favorite">
          <i className="fa-solid fa-heart"></i>
        </div>
        {/* <div className="actionPanel__icon">
          <i className="fa-solid fa-check"></i>
        </div>
        <div className="actionPanel__icon">
          <i className="fa-solid fa-check"></i>
        </div> */}
      </div>
    </div>
  );
};
export default MovieCard;
