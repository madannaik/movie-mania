import React from "react";
import { getImageUrl } from "../API/const";
import { CardLoader } from "../components/CardLoader";
import { trendingAPI } from "../interfaces/trendingAPI";
import { useRouter } from "next/router";
export const ListMovies = ({
  data,
  loading,
  error,
  heading,
}: {
  data: trendingAPI | undefined;
  loading: boolean;
  error: any;
  heading: string;
}) => {
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
    <div className="topmovies">
      <h1 className="topmovies__heading">{heading}</h1>
      <CardLoader loader={loading} />
      <div className="topmovies__list">
        {data &&
          data.results.map((data, index) => {
            return (
              <>
                <div
                  onClick={() => onClick(data.id)}
                  key={index}
                  className="topmovies__card"
                >
                  <img
                    loading="eager"
                    src={getImageUrl(data.poster_path)}
                    alt={data.title}
                  />
                  <div className="topmovies__name">
                    <p>{data.title}</p>
                  </div>
                  <div className="topmovies__name--mobile">
                    {data.title.substring(0, 15)}
                  </div>
                </div>
              </>
            );
          })}

        {/* <div className="topmovies__card">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=600&aspectRatio=1.78&format=png" />
        </div>
        <div className="topmovies__card">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=600&aspectRatio=1.78&format=png" />
        </div>
        <div className="topmovies__card">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=600&aspectRatio=1.78&format=png" />
        </div>
        <div className="topmovies__card">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=600&aspectRatio=1.78&format=png" />
        </div>
        <div className="topmovies__card"></div>
        <div className="topmovies__card"></div>
        <div className="topmovies__card"></div>
        <div className="topmovies__card"></div>
        <div className="topmovies__card"></div>
        <div className="topmovies__card"></div>
        <div className="topmovies__card"></div>
        <div className="topmovies__card"></div>
        <div className="topmovies__card"></div>
        <div className="topmovies__card"></div>
        <div className="topmovies__card"></div> */}
      </div>
    </div>
  );
};
