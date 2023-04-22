import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

function ProductCarousel({ products, link, showMorelink2 }) {
  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className=" container  ">
      <div className="row">
        <div className="col-lg">
          <h1 className="py-5">{products.title}</h1>
          <div className="carousel-btn pb-3">
            <div className="bestSeller-showM">
              <p>Show more</p>
              <p>
                <Link to={`/${showMorelink2}`}>
                  <HiArrowNarrowRight />
                </Link>
              </p>
            </div>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {products.items.map((item, index) => (
              <ProductCard
                product={item}
                link={link}
                sale={item.new}
                color={item.color}
                key={index}
              />
            ))}
          </Slider>
        </div>
        <div className="col-lg mt-3">
          <div className="bestSeller-showM2">
            <p>Show more</p>
            <p>
              <Link to={`/${showMorelink2}`}>
                <HiArrowNarrowRight />
              </Link>
            </p>
          </div>
          <div className="carousel-btnSM">
            <button
              className="btn btn-outline-dark rounded-circle"
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
    </div>
  );
}

export default ProductCarousel;
