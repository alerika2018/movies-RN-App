import axios from "axios";

import { API_URL, API_FINAL } from "../config/api.config";
import { API_KEY } from "../config/apiKey";

export const getMovies = async (filter) => {
  try {
    const url = `${API_URL}movie/${filter}?api_key=${API_KEY}${API_FINAL}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (e) {
    alert(e.message);
  }
};

export const getTVShow = async (filter) => {
  try {
    const url = `${API_URL}tv/${filter}?api_key=${API_KEY}${API_FINAL}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (e) {
    alert(e.message);
  }
};

export const getSearch = async (filter, query) => {
  try {
    const url = `${API_URL}search/${filter}?api_key=${API_KEY}${API_FINAL}&query=${query}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (e) {
    alert(e.message);
  }
};

export const getDetails = async (id, type) => {
  try {
    const url = `${API_URL}${type}/${id}?api_key=${API_KEY}${API_FINAL}`;
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    alert(e.message);
  }
};
