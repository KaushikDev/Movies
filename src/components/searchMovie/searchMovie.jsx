import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL, MOVIE_API_KEY } from "../../common/apis/movieApi";
import { StoreContext } from "../../common/store/Store";

import "./searchMovie.scss";

const SearchMovie = ({ searchTerm }) => {
  const [movieTitleToSearchFor, setMovieTitleForSearchFor] = useState("");
  const { searchMovie } = useContext(StoreContext);

  const handleMovieSearch = async (e) => {
    e.preventDefault();

    await axios
      .get(
        `${BASE_URL}/?apikey=${MOVIE_API_KEY}&s=${movieTitleToSearchFor}&type=movie&page=1`
      )
      .then((res) => {
        res.data.Response === "True"
          ? searchMovie(res.data.Search, movieTitleToSearchFor, "")
          : searchMovie([], movieTitleToSearchFor, res.data.Error);
        setMovieTitleForSearchFor("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={(e) => handleMovieSearch(e)}>
        <div className="searchForm">
          <div className="inputSearchField">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              id="searchField"
              type="text"
              value={movieTitleToSearchFor}
              placeholder="search a movie"
              onChange={(e) => setMovieTitleForSearchFor(e.target.value)}
            />
            <h5>Previously searched for:</h5>
            <span>"{searchTerm}"</span>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchMovie;
