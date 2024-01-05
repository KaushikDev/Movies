import axios from "axios";
import { BASE_URL, MOVIE_API_KEY } from "../apis/movieApi";

export const checkIdExistsInArray = (arr, id) =>
  arr && arr.length && arr.filter((item) => item?.imdbID === id).length
    ? true
    : false;

const fetchThisMovie = async (id) =>
  await axios
    .get(`${BASE_URL}/?apikey=${MOVIE_API_KEY}&i=${id}`)
    .then((res) => res)
    .catch((err) => "false");

export const handleAddMovieToList = async (event, movie, reducerfn) => {
  event.stopPropagation();
  reducerfn(movie);
};

export const handleRemoveMovieFromList = async (
  event,
  id,
  movieList,
  reducerfn
) => {
  event.stopPropagation();

  const updatedList =
    (await movieList) &&
    movieList.length &&
    movieList.filter((item) => item.imdbID !== id);
  reducerfn(updatedList || movieList);
};
