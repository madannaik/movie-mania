export interface singleMovie {
  adult: boolean;

  backdrop_path: string;

  belongs_to_collection: null | {};

  budget: number;

  genres: Array<{
    id: number;
    name: string;
  }>;

  homepage: string;

  id: number;

  imdb_id: string;

  original_language: string;

  original_title: string;

  overview: string;

  popularity: number;

  poster_path: string;

  production_companies: Array<{
    name: string;

    id: number;

    logo_path: string;

    origin_country: string;
  }>;

  production_countries: Array<{
    iso_3166_1: string;

    name: string;
  }>;

  release_date: string;

  runtime: number;

  spoken_languages: Array<{
    iso_639_1: string;

    name: string;
  }>;

  status:
    | "Rumored"
    | "Planned"
    | " In Production"
    | "Post Production"
    | "Released"
    | "Canceled";

  tagline: string;

  title: string;

  video: boolean;

  vote_average: number;

  vote_count: number;
}
