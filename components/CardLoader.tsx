import React from "react";

export const CardLoader = ({ loader }: { loader: boolean }) => {
  return loader ? (
    <div className="loader">
      <div className="loader__list">
        {Array.from(new Array(10)).map((data, index) => {
          return (
            <div
              key={index}
              className={`loader__card ${
                loader ? "loader__card--loading" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};
