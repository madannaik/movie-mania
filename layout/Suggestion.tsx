import { is } from "immer/dist/internal";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { getImageUrl } from "../API/const";
import { fetcher } from "../API/SWRfetcher";
import { singleMovie } from "../interfaces/singleMovie";
import { trendingAPI } from "../interfaces/trendingAPI";
import { ListMovies } from "./ListMovies";

export const Suggestion = ({ url }: { url: string }) => {
  const { isValidating, mutate, data, error } = useSWR<trendingAPI, any>(
    url,
    fetcher
  );
  const router = useRouter();
  const onClick = (id: Number) => {
    router.push({
      pathname: "/details",
      query: {
        id: id.toString(),
      },
    });
  };

  return (
    <div className="suggestion">
      <div className="suggestion__">
        {isValidating ? (
          <></>
        ) : (
          <div className="suggestion__list">
            {data?.results.map((recm, index) => {
              return (
                <div
                  onClick={() => onClick(recm.id)}
                  key={index}
                  className="suggestion__card"
                >
                  <img src={getImageUrl(recm?.poster_path)} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
