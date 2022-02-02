import axios from "axios";

import { API_KEY, API_URL, API_FINAL } from "../config/api.config";

export const getMovies = async (filter) => {
  const url = `${API_URL}movie/${filter}?api_key=${API_KEY}${API_FINAL}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const getTVShow = async (filter) => {
  const url = `${API_URL}tv/${filter}?api_key=${API_KEY}${API_FINAL}`;
  console.log(url);

  const response = await axios.get(url);
  //   console.log("results", response.data.results);
  return response.data.results;
};

export const getSearch = async (filter, query) => {
  const url = `${API_URL}search/${filter}?api_key=${API_KEY}${API_FINAL}&query=${query}`;
  console.log(url);

  const response = await axios.get(url);
  //   console.log("results", response.data.results);
  return response.data.results;
};

// https://api.themoviedb.org/3/search/movie?api_key=f61d2a5ccc7d268ad76d8deebaff8b7e&language=en-US&page=1&include_adult=false&query=

// https://api.themoviedb.org/3/search/tv?api_key=f61d2a5ccc7d268ad76d8deebaff8b7e&language&language=en-US&page=1&include_adult=false&query=sing

// https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
