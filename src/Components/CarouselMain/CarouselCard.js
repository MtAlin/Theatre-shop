import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function CarouselCard({ item, Bullet }) {
  return (
    <div className="carouselCard-container">
      <div className="carouselCard-row">
        <div className="carouselCard-col-4">
          <div>
            <h1>{item.title}</h1>
            <h6>{item.subTitle}</h6>
          </div>
          <Link className="carouselCard_btn " to="/costumes">
            Get it now <BsArrowRight />
          </Link>
        </div>
        <div className="carouselCard-col-8">
          <img className="carouselCard-img" src={item.image}></img>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
