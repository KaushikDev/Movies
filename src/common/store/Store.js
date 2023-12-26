import { createContext, useReducer } from "react";
import moviesReducer, { initialState } from "./moviesReducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const searchResults = (movies) => {
    dispatch({ type: "searched", payload: movies });
  };
  const addAMovie = (movie) => {
    const updatedMovies = state.movies;
    updatedMovies.push(movie);

    dispatch({
      type: "add",
      payload: updatedMovies,
    });
  };

  return (
    <StoreContext.Provider value={{state, searchResults, addAMovie}}>{children}</StoreContext.Provider>
  );
};
