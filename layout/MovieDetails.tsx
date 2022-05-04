import React from "react";
import { singleMovie } from "../interfaces/singleMovie";

export const MovieDetails = ({ data }: { data: singleMovie }) => {
  return (
    <div className="movieinfo">
      <div className="movieinfo__about">
        <h1 className="movieinfo__heading">Black Is King</h1>
        <p className="movieinfo__abstract">
          {`This visual album from Beyoncé reimagines the lessons of "The Lion
          King" (2019) for today’s young kings and queens in search of their own
          crowns.`}
        </p>
      </div>
      <div className="movieinfo__time__duration">
        <div className="movieinfo__time">
          <p>Duration</p>
          <p>{data.runtime}</p>
        </div>
        <div className="movieinfo__duration">
          <p>Release Date</p>
          <p>{data.release_date}</p>
        </div>
      </div>
      <div className="movieinfo__genre__cast">
        <div className="movieinfo__genre">
          <p>Genres:</p>
          <p>Music</p>
        </div>
        <div className="movieinfo__cast">
          <p className="">Cast</p>
          <ul>
            <li>Beyoncé</li>
            <li>Adut Akech</li>
            <li>Naomi Campbell</li>
            <li>Blue Ivy Carter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
