import { createContext, useReducer } from "react";
import moviesReducer, { initialState } from "./moviesReducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const searchMovie = (movies,searchTerm,msg) => {
    dispatch({ type: "searched", payload: {movies, searchTerm, msg} });
  };

  const setCurrentMovie = (movie) => {
    dispatch({ type: "current", payload: movie });
  };

  const addMovieToWatchlist = (movie) => {
    const updatedWatchlist = state.watchlist;
    updatedWatchlist.push(movie);

    dispatch({
      type: "addToWatchlist",
      payload: updatedWatchlist,
    });
  };

  const removeMovieFromWatchlist = (movies) => {
    dispatch({
      type: "removeFromWatchlist",
      payload: movies,
    });
  };

  const addMovieToFavorites = (movie) => {
    const updatedFavorites = state.favorites;
    updatedFavorites.push(movie);

    dispatch({
      type: "addToFavorites",
      payload: updatedFavorites,
    });
  };

  const removeMovieFromFavorites = (movies) => {
    dispatch({
      type: "removeFromFavorites",
      payload: movies,
    });
  };

  return (
    <StoreContext.Provider
      value={{
        state,
        searchMovie,
        setCurrentMovie,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToFavorites,
        removeMovieFromFavorites
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
