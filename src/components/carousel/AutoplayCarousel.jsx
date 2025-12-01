import React from "react";
import "./autoplaycarousel.scss";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              key={detailKey}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKeyx) => {
          return (
            <CarouselItem
             key={detailKeyx}
              imgUrl={cardDetails[detailKeyx].imgUrl}
              imgTitle={cardDetails[detailKeyx].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}


// https://medium.com/@divyakoneti0001/how-to-create-an-autoplay-or-infinite-carousel-in-react-d9f9bff11048