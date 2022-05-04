import React, { useEffect, useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

export const Carousel = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeSlideT();
    }, 5000);
    return () => window.clearTimeout(timeout);
  }, [activeCard]);

  const changeSlideT = () => {
    if (activeCard === 3) {
      setActiveCard(0);
    } else setActiveCard(activeCard + 1);
  };

  const style = {
    transform: `translateX(-${activeCard * 100}%)`,
  };
  const changeSlide = (indicator: string) => {
    if (indicator === "left")
      if (activeCard === 0) {
        setActiveCard(3);
      } else setActiveCard(activeCard - 1);
    else {
      if (activeCard === 3) {
        setActiveCard(0);
      } else setActiveCard(activeCard + 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__item" style={style}>
        <div>
          <img
            className="carousel__item__image"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D79190EE1ECBA1C48713150D430582515E92D47E824FB15BBB53CEA30D9B3BA/scale?width=1440&aspectRatio=3.91&format=jpeg"
          />
        </div>
      </div>
      <div className="carousel__item" style={style}>
        <div>
          <img
            className="carousel__item__image"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D79190EE1ECBA1C48713150D430582515E92D47E824FB15BBB53CEA30D9B3BA/scale?width=1440&aspectRatio=3.91&format=jpeg"
          />
        </div>
      </div>
      <div className="carousel__item" style={style}>
        <div>
          <img
            className="carousel__item__image"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D79190EE1ECBA1C48713150D430582515E92D47E824FB15BBB53CEA30D9B3BA/scale?width=1440&aspectRatio=3.91&format=jpeg"
          />
        </div>
      </div>
      <div className="carousel__item" style={style}>
        <div>
          <img
            className="carousel__item__image"
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D79190EE1ECBA1C48713150D430582515E92D47E824FB15BBB53CEA30D9B3BA/scale?width=1440&aspectRatio=3.91&format=jpeg"
          />
        </div>
      </div>
      <div
        className="carousel__controls--left"
        onClick={() => changeSlide("left")}
      >
        <AiFillLeftCircle />
      </div>
      <div
        className="carousel__controls--right"
        onClick={() => changeSlide("right")}
      >
        <AiFillRightCircle />
      </div>
    </div>
  );
};
