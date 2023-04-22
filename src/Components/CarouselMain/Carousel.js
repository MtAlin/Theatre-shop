import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillCircleFill, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Cdata from "./CarouselData";
import { useRef } from "react";
import CarouselCard from "./CarouselCard";

function Carousel() {
  const sliderRef = useRef(null);
  console.log(sliderRef);
  const Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    customPaging: function (i) {
      const color = ["text-primary", "text-success", "text-danger"];
      return (
        <a className={color[i]}>
          <BsFillCircleFill />
        </a>
      );
    },
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section className="carousel-background">
      <div className="carousel-row">
        <div className="carousel-col-9">
          <Slider ref={sliderRef} {...Settings}>
            {Cdata.map((item, index) => (
              <CarouselCard Bullet={BsFillCircleFill} item={item} key={index} />
            ))}
          </Slider>
        </div>
        <div className="carousel-col-3">
          <div className="carousel-btn ">
            <button
              className="btn btn-outline-dark rounded-circle "
              onClick={handlePrev}
            >
              <BsArrowLeft />
            </button>
            <button
              className="btn btn-outline-dark rounded-circle"
              onClick={handleNext}
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
