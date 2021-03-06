import type { NextPage } from "next";
import { useEffect } from "react";
import useSWR from "swr";
import { trendingMovie } from "../API/const";
import { fetcher } from "../API/SWRfetcher";
import { Carousel } from "../components/Carousel";
import { trendingAPI } from "../interfaces/trendingAPI";
import { ListMovies } from "../layout/ListMovies";

const Home: NextPage = () => {
  const { data, isValidating, error } = useSWR<trendingAPI, string>(
    trendingMovie,
    fetcher,
    { refreshInterval: 0 }
  );
  return (
    <div className="home">
      <Carousel />
      <ListMovies
        heading="Trending Movies"
        data={data}
        error={error}
        loading={isValidating}
      />
    </div>
  );
};

export default Home;
