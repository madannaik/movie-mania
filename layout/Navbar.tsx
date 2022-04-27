import React, { Children } from "react";
import {
  AiOutlineMenuFold,
  AiFillHome,
  AiOutlineSearch,
  AiFillLike,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { IconBase } from "react-icons/lib";
import Link from "next/link";
const Navbar = ({ children }: { children: React.ReactChild }) => {
  return (
    <div className="navbar">
      <nav className="nav">
        <img className="nav__image" src="/logo.svg" alt="logo" />
        <ul className="nav__ele">
          <Link href={"/"}>
            <li className="nav__ele--item nav__ele--item1">
              <AiFillHome /> Home
            </li>
          </Link>
          <Link href={"/search"}>
            <li className="nav__ele--item nav__ele--item2">
              <AiOutlineSearch /> Search
            </li>
          </Link>
          <li className="nav__ele--item nav__ele--item3">
            <AiFillLike />
            fav
          </li>
          <li className="nav__ele--item nav__ele--item4">
            <AiOutlineOrderedList />
            WatchList
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
