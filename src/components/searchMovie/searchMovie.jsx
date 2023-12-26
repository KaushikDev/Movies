import { useContext, useState } from "react";
import axios from 'axios';
import { BASE_URL, MOVIE_API_KEY } from "../../common/apis/movieApi";
import { StoreContext } from "../../common/store/Store";


const SearchMovie = () => {
  const [movieTitleToSearchFor, setMovieTitleForSearchFor] = useState("");
    const {searchResults} = useContext(StoreContext);

  const handleMovieSearch = async e => {
    e.preventDefault();
   await  axios
      .get(`${BASE_URL}/?apikey=${MOVIE_API_KEY}&s=${movieTitleToSearchFor}&page=1`)
      .then((res) => searchResults(res.data.Search));
  }

  return (
    <form onSubmit={(e)=>handleMovieSearch(e)}>
      <div className="searchForm">
        <div className="inputSearchField">
          <input
            type="text"
            value={movieTitleToSearchFor}
            onChange={(e) => setMovieTitleForSearchFor(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchMovie;