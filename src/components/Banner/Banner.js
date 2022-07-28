import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import slide1 from "../../slider/slide2.jpg";
import slide2 from "../../slider/slide3.jpg";
import slide3 from "../../slider/slide4.jpg";
import slide4 from "../../slider/slide5.jpg";

const Banner = () => {
  return (
    <div className="banner py-3">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
