import type { NextPage } from "next";
import { Carousel } from "../components/Carousel";
import { TopMovies } from "../layout/TopMovies";

const Home: NextPage = () => {
  return (
    <div className="home">
      <Carousel />
      <TopMovies />
    </div>
  );
};

export default Home;
