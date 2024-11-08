import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

function HomeCarouselBottom(args) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Define slides with unique IDs
  const slidesData = [
    {
      id: 1,
      title: "SUMMER 2024",
      price: "$16.48",
      imgSrc: "images/carousel2.png",
    },
    {
      id: 2,
      title: "AUTUMN 2024",
      price: "$19.99",
      imgSrc: "images/carousel2.png",
    },
    {
      id: 3,
      title: "WINTER 2024",
      price: "$21.49",
      imgSrc: "images/carousel2.png",
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === slidesData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? slidesData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = slidesData.map((slide) => {
    return (
      <CarouselItem
        className="bg-[#23856D] min-h-screen relative"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={slide.id} // Use unique ID for each slide
      >
        <div className="absolute top-0 right-[10%] w-[80%] flex flex-wrap justify-between items-center sm:flex-col py-[60px] gap-[30px]">
          <div className="flex flex-col items-start justify-between gap-[30px] sm:items-center">
            <div>
              <h5 className="text-white font-bold text-xl">{slide.title}</h5>
            </div>

            <h1 className="text-[#FAFAFA] font-bold text-[58px] leading-[80px] sm:text-center sm:text-[40px] sm:leading-[50px]">
              Vita Classic <br /> Product
            </h1>

            <h4 className="text-xl text-[#FAFAFA] sm:text-center">
              We know how large objects will act,
              <br /> but things on a small scale.
            </h4>
            <div className="flex items-center gap-[34px]">
              <h5 className="text-white font-bold text-2xl m-0 p-0">
                {slide.price}
              </h5>
              <button
                onCLick={() => navigate("/shop")}
                className="bg-[#2DC071] font-bold text-2xl text-white py-2 px-6 rounded"
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            <img
              className="w-full max-h-[700px] object-cover object-right-bottom"
              src={slide.imgSrc}
              alt=""
            />
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
      interval={0}
      {...args}
    >
      <CarouselIndicators
        items={slidesData} // Pass the updated slidesData with unique IDs
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

export default HomeCarouselBottom;
