import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const BASE_URL = "https://www.omdbapi.com";
export const MOVIE_API_KEY = '3942b4cf';