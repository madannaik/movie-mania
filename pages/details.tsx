import React from "react";
import { AiFillSave, AiOutlineMore } from "react-icons/ai";

const details = () => {
  return (
    <div className="details">
      <h1 className="details__heading">
        Star Wars: Episode I - The Phantom Menace
      </h1>
      <div className="details__controls">
        <button className="details__btn">Watch Now</button>
        <button className="details__btn">Trailor</button>
        <button className="details__btn">
          <AiFillSave />
        </button>
        <button className="details__btn">
          <AiOutlineMore />
        </button>
      </div>
      <ul className="details__genre">
        <li>1999-05-19</li>
        <li>136 minutes</li>
        <li>Adventure</li>
        <li>Action</li>
        <li>Science Fiction</li>
      </ul>
      <p className="details__info">
        Anakin Skywalker, a young slave strong with the Force, is discovered on
        Tatooine. Meanwhile, the evil Sith have returned, enacting their plot
        for revenge against the Jedi.
      </p>
    </div>
  );
};

export default details;
