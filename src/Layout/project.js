import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataAllProject } from "../Components/dataProject.js";
import { projetDefault} from "../Assets/projet.jpg"
export default function Project() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1724,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
     
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: "",
    }));
  };
  return (
    <div className="project" id="Project">
      <div className="project__background">
        <Slider {...settings}>
          {dataAllProject.map((item, id) => (
            <div className="card" key={id}>
              <div className="card-top">
                <img className="card-top__img" src={item.src} alt={item.title} onError={handleErrorImage} />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom">
                {/* <h3>{item.price}</h3> */}
                <span className="description">{item.description}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
