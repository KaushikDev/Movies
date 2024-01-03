import { createContext, useReducer } from "react";
import moviesReducer, { initialState } from "./moviesReducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const searchMovie = (movies) => {
    dispatch({ type: "searched", payload: movies });
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

  const addMovieToFavorites = (movie) => {
    const updatedFavorites = state.favorites;
    updatedFavorites.push(movie);

    dispatch({
      type: "addToFavorites",
      payload: updatedFavorites,
    });
  };

  return (
    <StoreContext.Provider
      value={{
        state,
        searchMovie,
        setCurrentMovie,
        addMovieToWatchlist,
        addMovieToFavorites,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
