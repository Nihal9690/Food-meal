import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AreaMealSlider = () => {
  const [country, setCountry] = useState([]);

  const fetchArea = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"
    );
    const jsonData = await response.json();
    setCountry(jsonData.meals || []);
  };

  useEffect(() => {
    fetchArea();
  }, []);

  const settings2 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplaySpeed:1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 via-blue-800 to-gray-900 text-white h-full md:h-4/5 py-10  px-4">
      <h1 className="text-center text-2xl md:text-4xl font-extrabold mt-10 md:mt-20 mb-8 md:mb-12 text-yellow-300 drop-shadow-lg">
        Dessert
      </h1>

      <Slider {...settings2}>
        {country.map((item) => (
          <div
            key={item.idMeal}
            className="w-full h-full p-4 md:p-6 mx-auto rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Link to={`/recipe/${item.idMeal}`}>
              <img
                src={item.strMealThumb}
                className="rounded-xl w-full h-40 md:h-56 object-cover mb-3 md:mb-4"
                alt={item.strMeal}
              />
            </Link>
            <h1 className="text-center text-lg md:text-xl font-semibold text-white">
              {item.strMeal}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AreaMealSlider;
