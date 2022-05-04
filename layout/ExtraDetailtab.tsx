import React, { useState } from "react";
import { getRecommondation } from "../API/const";
import { singleMovie } from "../interfaces/singleMovie";
import { Extras } from "./Extras";
import { MovieDetails } from "./MovieDetails";
import { Suggestion } from "./Suggestion";

export const ExtraDetailtab = ({ data }: { data: singleMovie }) => {
  const [activetab, setActiveTab] = useState<Array<boolean>>([
    true,
    false,
    false,
  ]);
  const onClicktab = (index: number) => {
    setActiveTab((prev) => {
      return prev.map((elem, i) => (i === index ? true : false));
    });
  };

  return (
    <div className="tab">
      <div className="tab__controls">
        <span
          onClick={() => {
            onClicktab(0);
          }}
          className={`tab__controls__items ${
            activetab[0] && "tab__controls__items--active"
          } `}
        >
          SUGGESTIONS
        </span>
        <span
          onClick={() => {
            onClicktab(1);
          }}
          className={`tab__controls__items ${
            activetab[1] && "tab__controls__items--active"
          }`}
        >
          EXTRAS
        </span>
        {/* <span
          onClick={() => {
            onClicktab(2);
          }}
          className={`tab__controls__items ${
            activetab[2] && "tab__controls__items--active"
          }`}
        >
          DETAILS
        </span> */}
      </div>
      <div className="tab__details">
        <div className={`tab__1 ${activetab[0] ? "tab--active" : ""}`}>
          <Suggestion url={getRecommondation(data.id)} />
        </div>
        {/* <div className={`tab__2 ${activetab[1] ? "tab--active" : ""}`}>
          <Suggestion url={get} />
        </div> */}
        {/* <div className={`tab__3 ${activetab[2] ? "tab--active" : ""}`}>
          <MovieDetails data={data} />
        </div> */}
      </div>
    </div>
  );
};
