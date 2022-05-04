import React from "react";

interface props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar = ({ onChange }: props) => {
  return (
    <div className="searchbar">
      <input
        onChange={onChange}
        className="searchbar__input"
        placeholder="search movie and trailors"
      />
    </div>
  );
};
