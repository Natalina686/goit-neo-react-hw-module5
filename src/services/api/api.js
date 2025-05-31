import axios from "axios";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2NmYzA4NjUwMDRiNGM0MDZmZTNjOTgyZmRmYjMyOSIsIm5iZiI6MTc0ODY2OTY0Ny42NzcsInN1YiI6IjY4M2E5NGNmZjI0ZDg0OWFmNWFkNzQ5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-vHI2UW0dojan5Yy9LOIsaSlSY5UOVPPQmVyQwMcM3g";
const BASE_URL = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});

export const getTrendingMovies = async () => {
    const response = await axiosInstance.get("/trending/movie/day");
    return response.data;
}

export const getMovieDetails = async (movieId) => {
    const response = await axiosInstance.get(`/movie/${movieId}`);
    return response.data;
}

export const getMovieCredits = async (movieId) => {
    const response = await axiosInstance.get(`/movie/${movieId}/credits`)
    return response.data;
}

export const searchMovies = async (query) => {
  const response = await axiosInstance.get(`/search/movie`, {
    params: {
      query,
      language: "en-US",
      include_adult: false,
      page: 1,
    },
  });
  return response.data;
};

export const getMovieReviews = async (movieId) => {
    const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
    return response.data;
}