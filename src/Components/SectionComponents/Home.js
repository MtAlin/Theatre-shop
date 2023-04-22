import React, { useEffect } from "react";
import Carousel from "../CarouselMain/Carousel";
import Collection from "../CarouselCollection/Colection/Collection";
import BlackSales from "../CarouselCollection/BlackSales/BlackSales";
import ProductCarousel from "../CustomProduct/ProductCarousel";
import VideoSeller from "../VideoSeller/VideoSeller";
import About from "../About/About";
import Subscribe from "../Subscribe/Subscribe";
import FooterContact from "./Footer/FooterContact";
import { useSelector } from "react-redux";

function Home() {
  useEffect(() => {
    fetch("http://localhost:4000/api/favorite")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      });
  }, []);

  const sellerData = useSelector((state) => state.counter.sellerData);
  return (
    <div>
      <Carousel />
      <Collection />
      <BlackSales />
      {sellerData.map((product, index) => (
        <ProductCarousel
          key={index}
          products={product}
          link={product.link}
          showMorelink2={product.sellerLink}
        />
      ))}
      <VideoSeller />
      <About />
      <Subscribe />
      <FooterContact />
    </div>
  );
}

export default Home;
