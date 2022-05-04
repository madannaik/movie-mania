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
  useEffect(() => {
    console.log(data?.results[0].adult);
  }, [data]);
  return (
    <div className="home">
      <Carousel />
      <ListMovies
        heading="Treding Movies"
        data={data}
        error={error}
        loading={isValidating}
      />
    </div>
  );
};

export default Home;
