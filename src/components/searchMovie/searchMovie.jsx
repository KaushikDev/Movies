import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL, MOVIE_API_KEY } from "../../common/apis/movieApi";
import { StoreContext } from "../../common/store/Store";

import "./searchMovie.scss";

const SearchMovie = () => {
  const [movieTitleToSearchFor, setMovieTitleForSearchFor] = useState("");
  const { searchMovie } = useContext(StoreContext);

  const handleMovieSearch = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `${BASE_URL}/?apikey=${MOVIE_API_KEY}&s=${movieTitleToSearchFor}&type=movie&page=1`
      )
      .then((res) => {
        searchMovie(res.data.Search);
        setMovieTitleForSearchFor("");
      });
  };

  return (
    <form onSubmit={(e) => handleMovieSearch(e)}>
      <div className="searchForm">
        <div className="inputSearchField">
          <label htmlFor="searchField">Search Movie : </label>
          <input
            id="searchField"
            type="text"
            value={movieTitleToSearchFor}
            placeholder="search a movie"
            onChange={(e) => setMovieTitleForSearchFor(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchMovie;
