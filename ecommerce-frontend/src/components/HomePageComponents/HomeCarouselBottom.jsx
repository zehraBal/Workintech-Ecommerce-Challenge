import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const items = [
  {
    key: 1,
  },
  {
    key: 2,
  },
];

export default function HomeCarouselBottom(args) {
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
        className="custom-tag"
        tag="div"
        key={item.key}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div className=" w-[80%]  relative pt-[60px] gap-[30px]  flex">
          <div className="w-1/2 flex flex-col gap-9 items-start justify-center flex-wrap sm:w-full">
            <div>
              <h5 className="text-white font-bold text-xl">SUMMER 2024</h5>
            </div>

            <h1 className="text-[#FAFAFA] font-bold text-[58px] leading-[80px]">
              Vita Classic Product
            </h1>

            <div>
              <h4 className="text-xl text-[#FAFAFA]">
                We know how large objects will act,
                <br /> but things on a small scale.
              </h4>
            </div>
            <div className="flex items-center gap-[34px]">
              <h5 className="text-white font-bold text-2xl m-0 p-0">$16.48</h5>
              <button className="bg-[#2DC071] font-bold text-2xl text-white py-2 px-6 rounded">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img
              classname="absolute top-0 left-0 object-cover"
              src="/images/carousel2.png"
              alt=""
            />
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
            max-width: 100%;
            height:700px;
            align-items:center;
            background: #23856D;
            display:flex;
            justify-content:center;
          }`}
      </style>
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
    </div>
  );
}
