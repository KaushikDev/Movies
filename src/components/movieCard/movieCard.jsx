import React from "react";

const MovieCard = ({movie}) => {
  const {Title, Poster, Year, Type} = movie;
  return (
    <div>
      <img src={Poster} alt={Title} />
      <h3>{Title}</h3>
      <h4>{Type}</h4>
      <h5>{Year}</h5>
    </div>
  );
};
export default MovieCard;
