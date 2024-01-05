import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const BASE_URL = "https://www.omdbapi.com";
export const MOVIE_API_KEY = process.env.REACT_APP_OMDB_API_KEY;