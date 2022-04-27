import React from "react";
import { SearchBar } from "../components/SearchBar";
import { TopMovies } from "../layout/TopMovies";

const search = () => {
  return (
    <div className="search">
      <SearchBar />
      <TopMovies />
    </div>
  );
};

export default search;
