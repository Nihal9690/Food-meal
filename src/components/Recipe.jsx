import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AreaMealSlider from "./AreaMealSlider";

const Recipe = () => {
  const [myId, setMyId] = useState(null);

//   myId ek state variable hai, jo initially null set kiya gaya hai.
// setMyId ek function hai, jo myId ki value ko update karega.

  const { idMeal } = useParams(); //useParams hook se aap URL parameters ko access kar sakte hain.

  const fetchApi = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data = await response.json();
    setMyId(data.meals ? data.meals[0] : null); //
  };

  useEffect(() => {
    fetchApi();
  }, [idMeal]);

  if (!myId) {
    return <div>Loading...</div>;
  }

  const ingredients = []; // empty array and empty obj truthy value dete hai  but empty string falsy deta hai
  for (let i = 1; i <= 20; i++) {
    
    const ingredient = myId[`strIngredient${i}`];
    const measure = myId[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  } //, null, undefined, "" (empty string), 0, false, etc.

  return (

    <>
    <div className="p-5 bg-white max-w-4xl mx-auto rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        <img
          src={myId.strMealThumb}
          alt={myId.strMeal}
          className="w-full max-w-md rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold text-center mb-2">{myId.strMeal}</h1>
      <div className="text-center text-lg mb-2">
        <p className="text-sm">Category: {myId.strCategory}</p>
        <p className="text-sm">Area: {myId.strArea}</p>
      </div>
      {/* Recipe Instructions */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
        <p>{myId.strInstructions}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul>
          {ingredients.map((item, index) => (
            <li key={index} className="text-sm">
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ul>
      </div>

      {/*  myId.strYoutube && <= Yeh ek conditional rendering expression hai. Agar myId.strYoutube ki
      value truthy hoti hai (jaise  agar myId.strYoutube defined aur non-empty
      string hai), tab jo code iske baad likha gaya hai, woh render hoga. */}


{/* null, undefined, "" (empty string), 0, false, ya NaN  => ye saari falsy value hai*/}

      {myId.strYoutube && (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Watch on YouTube:</h3>
          <a
            href={myId.strYoutube}
            target="_blank"
            
            className="text-blue-600 hover:underline"
          >
            {myId.strYoutube}
          </a>
        </div>
      )}

   
    </div>
    <AreaMealSlider/>
    </>
  );
};

export default Recipe;
