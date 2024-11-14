import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CateSlider = () => {
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan"
    );
    const jsonData = await response.json();
    setCategory(jsonData.meals || []);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
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
    <>
      <div className="bg-gradient-to-r from-purple-700 via-blue-800 to-gray-900 text-white min-h-screen py-16 px-4">
        <h1 className="text-center text-lg md:text-4xl font-extrabold mb-10 text-yellow-300 drop-shadow-lg">
        Popular Meals
        </h1>

        <Slider {...settings}>
          {category.map((item) => (
            <div
              key={item.idMeal}
              className="w-4/5 h-full p-8 mx-auto  rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link to={`/recipe/${item.idMeal}`}>
                <img
                  src={item.strMealThumb}
                  className="rounded-xl w-full h-56 object-cover mb-4"
                  alt={item.strMeal}
                />
              </Link>
              <h1 className="text-center text-xl font-semibold text-white">
                {item.strMeal}
              </h1>
            </div>
          ))}
        </Slider>

       
      </div>
    </>
  );
};

export default CateSlider;
