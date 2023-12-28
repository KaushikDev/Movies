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
    case "add":
      return { ...state, movies: action.payload };
    case "remove":
      return { ...state, movies: action.payload };
    default:
      return state ;
  }
};

export default moviesReducer;
