import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    src: "images/carousel.png",
    key: 1,
  },
  {
    src: "images/carousel.png",
    key: 2,
  },
];

export default function HomeCarousel(args) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div className=" relative  ">
          <img
            className="w-full h-[750px] object-cover sm:h-[500px]"
            src={item.src}
            alt="carousel slide"
          />
          <div className="absolute inset-0 w-[70%] flex flex-col justify-center items-center py-[112px] sm:w-full">
            <div className="flex flex-col gap-9 items-start py-[112px] flex-wrap sm:items-center">
              <div>
                <h5 className="text-white font-bold text-base">SUMMER 2024</h5>
              </div>
              <div className="text-center">
                <h1 className="text-[#FAFAFA] font-bold text-[58px] leading-[80px]">
                  NEW COLLECTION
                </h1>
              </div>
              <div>
                <h4 className="text-xl text-[#FAFAFA]">
                  We know how large objects will act,
                  <br /> but things on a small scale.
                </h4>
              </div>
              <div className="flex justify-start">
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-[#2DC071] font-bold text-2xl text-white py-2 px-6 rounded"
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false} // false for disabling automatic sliding
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
