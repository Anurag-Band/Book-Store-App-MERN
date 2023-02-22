import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

import Banner1 from "../../assets/landing-page-banners/banner-1.jpg";
import Banner2 from "../../assets/landing-page-banners/banner-2.jpg";
import Banner3 from "../../assets/landing-page-banners/banner-3.jpg";
import Banner4 from "../../assets/landing-page-banners/banner-4.jpg";
import Banner5 from "../../assets/landing-page-banners/banner-5.jpg";
import Banner6 from "../../assets/landing-page-banners/banner-6.jpg";

const SaleCarousel = () => {
  const navigate = useNavigate();
  return (
    <Carousel
      className='cursor-pointer'
      autoPlay
      infiniteLoop
      onClickItem={() => navigate("/books")}
      interval={2500}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img src={Banner1} alt='Banner1' />
      </div>
      <div>
        <img src={Banner2} alt='Banner2' />
      </div>
      <div>
        <img src={Banner3} alt='Banner1' />
      </div>
      <div>
        <img src={Banner4} alt='Banner1' />
      </div>
      <div>
        <img src={Banner5} alt='Banner2' />
      </div>
      <div>
        <img src={Banner6} alt='Banner1' />
      </div>
    </Carousel>
  );
};

export default SaleCarousel;
