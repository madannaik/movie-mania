/* eslint-disable @next/next/no-img-element */

import React from "react";
import { AiFillSave, AiOutlineMore } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";
import { Button } from "../components/Button";
import { ExtraDetailtab } from "../layout/ExtraDetailtab";
import useSWR from "swr";
import { getImageUrl, getSingleMovie } from "../API/const";
import { fetcher } from "../API/SWRfetcher";
import { useRouter } from "next/router";
import { singleMovie } from "../interfaces/singleMovie";
import { AwaitLoader } from "../components/AwaitLoader";
const Details = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const { data, isValidating, mutate, error } = useSWR<singleMovie, any>(
    getSingleMovie(parseInt(id as string)),
    fetcher
  );

  return isValidating ? (
    <AwaitLoader />
  ) : (
    data && (
      <div className="details">
        <div className="details__background">
          <div className="details__overlay"></div>

          <img
            className="details__background__img"
            alt="disney"
            src={getImageUrl(data?.poster_path as string)}
          />
        </div>
        <div className="details__info">
          <h1 className="details__heading">{data?.title}</h1>
          <div className="details__controls">
            <Button className="details__btn btn__watch">
              <FaPlayCircle /> Watch Now
            </Button>
            <Button className="details__btn btn__trailor">Trailor</Button>
            <Button className="details__btn btn__watchlist">
              <AiFillSave />
            </Button>
            <Button className="details__btn btn__more">
              <AiOutlineMore />
            </Button>
          </div>
          <ul className="details__genre">
            <li>{data?.release_date}</li>
            <li>{data?.runtime}</li>
            {data?.genres.map((gen, index) => {
              return <li key={index}>{gen.name}</li>;
            })}
            {/* <li>Adventure</li>
          <li>Action</li>
          <li>Science Fiction</li> */}
          </ul>
          <div className="details__desc">
            <p>{data?.overview}</p>
          </div>
          <ExtraDetailtab data={data as singleMovie} />
        </div>
      </div>
    )
  );
};

export default Details;
