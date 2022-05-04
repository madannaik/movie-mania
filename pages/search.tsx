import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { searchMovie } from "../API/const";
import { fetcher } from "../API/SWRfetcher";
import { SearchBar } from "../components/SearchBar";
import { trendingAPI } from "../interfaces/trendingAPI";
import { ListMovies } from "../layout/ListMovies";

const Search = () => {
  const [input, setInput] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const { isValidating, data, error } = useSWR<any, trendingAPI>(
    input !== "" ? searchMovie(input) : null,
    fetcher
  );
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="search">
      <SearchBar onChange={onChange} />
      <ListMovies
        heading="Search"
        data={data}
        error={error}
        loading={isValidating}
      />
    </div>
  );
};

export default Search;
