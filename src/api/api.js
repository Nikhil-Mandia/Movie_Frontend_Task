import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchMovie = async (name) => {
  const response = await axios.get(
    `${process.env.REACT_APP_MOVIE_API_KEY}&s=${name}`
  );
  return response.data;
};

export const fetchFavourites = async () => {
  const response = await axios.get(`${BASE_URL}/movie`);
  return response.data;
};

export const addToFavourites = async (data) => {
  const requiredData = {
    title: data.Title,
    year: data.Year,
    type: data.Type,
    poster: data.Poster,
  };
  const response = await axios.post(`${BASE_URL}/movie`, requiredData);
  return response.data;
};
