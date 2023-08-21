import { validateDataList } from "./validateData";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

const resolveUrl = (data) => {
  const { page = 1, endpoint } = data;
  const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}`;
  return url;
};

export const fetchData = async (data) => {
  const url = resolveUrl(data);
  const response = await fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      const movies = validateDataList(data.results);
      return movies;
    });
  return response;
};

export const fetchMovie = async (data) => {
  const url = resolveUrl(data);
  const response = await fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return response;
};
