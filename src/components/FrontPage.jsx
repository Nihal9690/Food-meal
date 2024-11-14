import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "./Card";

const FrontPage = () => {
  const [country, setCountry] = useState("indian");
  const [meal, setMeal] = useState([]); // Initialize meal as an empty array
  const [filterItem, setFilterItem] = useState({
    mealName: "",
    ingridient: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterItem((preItem) => ({ ...preItem, [name]: value }));
  };

  const getCountries = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
    );
    const data = await response.json();
    setMeal(data.meals || []); // Set to empty array if no meals found
  };

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    let response;
    // Fetch based on filter conditions
    if (filterItem.category) {
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterItem.category}`
      );
    } else if (filterItem.ingridient) {
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filterItem.ingridient}`
      );
    } else if (filterItem.mealName) {
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${filterItem.mealName}`
      );
    }

    const data = await response.json();
    setMeal(data.meals || []); // Set to empty array if no meals found

    // Reset filter inputs
    setFilterItem({
      mealName: "",
      ingridient: "",
      category: "",
    });
  };

  useEffect(() => {
    getCountries(); // Fetch country meals on country change
  }, [country]);

  return (
    <div className="w-full max-w-none min-h-screen flex flex-col gap-5 bg-black">
      <div className="w-full flex flex-col gap-3 md:flex-row md:gap-8 items-center border-b-4">
        <form
          className="w-full flex gap-2 justify-center items-center md:w-2/5 text-center pt-4 md:pt-0"
          onSubmit={handleSearch} // Prevent default behavior of form submit
        >
          {/* <input
            type="text"
            placeholder="Type Category Here .."
            onChange={handleChange}
            value={filterItem.mealName}
            name="category"
            className="input input-bordered w-full max-w-xs italic placeholder:italic"
          />

          <input
            type="text"
            placeholder="Type Ingredient Here .."
            onChange={handleChange}
            value={filterItem.ingridient}
            name="ingridient"
            className="input input-bordered w-full max-w-xs italic placeholder:italic"
          /> */}

          <input
            type="text"
            placeholder="Type Name Here .."
            onChange={handleChange}
            value={filterItem.mealName}
            name="mealName"
            className="input input-bordered w-full max-w-xs italic placeholder:italic"
          />

          <button type="submit" className="btn btn-outline btn-info">
            <FaSearch className="text-xl" />
          </button>
        </form>

        <div className="w-full md:w-3/5 flex justify-center gap-4 py-3 flex-wrap">
          <button
            className="btn btn-outline btn-error text-lg"
            onClick={() => setCountry("indian")}
          >
            Indian
          </button>
          <button
            className="btn btn-outline btn-success text-lg"
            onClick={() => setCountry("chinese")}
          >
            Chinese
          </button>
          <button
            className="btn btn-outline btn-warning text-lg"
            onClick={() => setCountry("italian")}
          >
            Italian
          </button>
          <button
            className="btn btn-outline btn-info text-lg"
            onClick={() => setCountry("British")}
          >
            British
          </button>
          <button
            className="btn btn-outline btn-secondary text-lg"
            onClick={() => setCountry("Canadian")}
          >
            Canadian
          </button>
        </div>
      </div>

      <div
        className={
          meal.length > 0
            ? "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-2"
            : "w-full h-52 flex justify-center text-center items-center "
        }
      >
        {meal.length > 0 ? (
          meal.map((item) => (
            <Card
              key={item.idMeal}
              Name={item.strMeal}
              image={item.strMealThumb}
              idMeal={item.idMeal}
            />
          ))
        ) : (
          <div className="py-3 text-xl w-full text-center capitalize">
            Sorry, No Result Found <br />
            <br /> Try another category
          </div>
        )}
      </div>
    </div>
  );
};

export default FrontPage;
