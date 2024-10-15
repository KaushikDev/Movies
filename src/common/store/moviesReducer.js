export const initialState = {
  search: {
    movies: [],
    searchedMovie: "",
    message: `Searched movies will appear here.`,
  },
  favorites: [],
  watchlist: [],
  currentMovie: {},
};

const moviesReducer = (state, action) => {
  switch (action.type) {
    case "searched":
      return {
        ...state,
        search: {
          movies: action.payload.movies,
          searchedMovie: action.payload.searchTerm,
          message: action.payload.msg,
        } || {
          movies: [],
          searchedMovie: "",
          message: "",
        },
      };
    case "current":
      return { ...state, currentMovie: action.payload || [] };
    case "addToWatchlist":
      return { ...state, watchlist: action.payload || [] };
    case "removeFromWatchlist":
      return { ...state, watchlist: action.payload };
    case "addToFavorites":
      return { ...state, favorites: action.payload || [] };
    case "removeFromFavorites":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
