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
    dots: false, 
    arrows: false, 
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 via-blue-800 to-gray-900 text-white h-full py-10 px-4">
      <h1 className="text-center text-2xl md:text-4xl font-extrabold mt-10 mb-8 text-yellow-300 drop-shadow-lg">
        Dessert
      </h1>

      {country.length > 0 ? (
        <Slider {...settings2}>
          {country.map((item) => (
            <div
              key={item.idMeal}
              className="w-full h-full p-4 mx-auto transform transition-all duration-300 ease-in-out"
            >
              <Link to={`/recipe/${item.idMeal}`}>
                <img
                  src={item.strMealThumb}
                  className="rounded-xl w-28 h-28 md:h-40 object-cover mx-auto mb-3"
                  alt={item.strMeal}
                />
              </Link>
              <h1 className="text-center text-lg md:text-xl font-semibold text-yellow-300">
                {item.strMeal}
              </h1>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center text-yellow-300 font-semibold text-lg">
          Loading Meals...
        </div>
      )}
    </div>
  );
};

export default AreaMealSlider;
