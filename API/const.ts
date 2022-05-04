// API KEY

const API_KEY: string = "d1fb164b21488fed9cce2f0b8228e59b";

// URL
export const url: string = `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`;

// BACKEND ENDPOINTS

export const getImageUrl = (path: string): string =>
  `https://image.tmdb.org/t/p/original/${path}`;

export const trendingMovie: string =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=d1fb164b21488fed9cce2f0b8228e59b";

export const getSingleMovie = (id: number): string =>
  `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

export const searchMovie = (query: string): string =>
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

export const getRecommondation = (id: number): string =>
  `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
