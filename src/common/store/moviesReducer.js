export const initialState = {
  movies: [],
  favorites: [],
  watchlist: [],
  currentMovie: {},
};

const moviesReducer = (state, action) => {
  switch (action.type) {
    case "searched":
      return { ...state, movies: action.payload || []};
      case "current":
        return { ...state, currentMovie: action.payload || []};
    case "addToWatchlist":
      return { ...state, watchlist: action.payload || [] };
    case "addToFavorites":
      return { ...state, favorites: action.payload || []};
    default:
      return state ;
  }
};

export default moviesReducer;
