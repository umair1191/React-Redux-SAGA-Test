import { MOVIES } from "../constants";
const loadMovies = page => ({
  type: MOVIES.LOAD,
  value: page
});

const setMovies = movies => ({
  type: MOVIES.LOAD_SUCCESS,
  movies
});

const getaMovie = id => ({
  type: MOVIES.GETAMOVIE,
  value: id
});

const setaMovie = movie => ({
  type: MOVIES.SETAMOVIE,
  movie
});
const setErrorPopular = error => ({
  type: MOVIES.LOAD_FAIL,
  error
});

const setErrorAmovie = error => ({
  type: MOVIES.AMOVIE_FAIL,
  error
});

const clearState = () => ({
  type: MOVIES.CLEAR
});

export {
  loadMovies,
  setMovies,
  getaMovie,
  setaMovie,
  clearState,
  setErrorPopular,
  setErrorAmovie
};
