import axios from "axios";

import { API_KEY, API_URL, API_FINAL } from "../config/api.config";

export const getMovies = async (filter) => {
  // const response = axios.creatos

  const url = `${API_URL}movie/${filter}?api_key=${API_KEY}${API_FINAL}`;
  console.log(url);

  const response = await axios.get(url);
  //   console.log("results", response.data.results);
  return response.data.results;
};

// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
