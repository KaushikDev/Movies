import { useContext, useEffect, useState } from "react";
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

  useEffect(() => {}, []);

  return (
    <>
      <form onSubmit={(e) => handleMovieSearch(e)}>
        <div className="searchForm">
          <div className="inputSearchField">
            <div className="inputSearchFieldWrapper">
              <input
                id="searchField"
                type="text"
                value={movieTitleToSearchFor}
                placeholder="Search a movie title"
                onChange={(e) => setMovieTitleForSearchFor(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" ? handleMovieSearch(e) : null
                }
              />
              <i
                className="fa-solid fa-magnifying-glass"
                onClick={(e) => handleMovieSearch(e)}
              ></i>
            </div>

            {searchTerm ? (
              <>
                <h5>Last searched movie : "{searchTerm}"</h5>
              </>
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchMovie;
