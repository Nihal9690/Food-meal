import React from "react";
import FrontPage from "./components/FrontPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import NavBar from "./components/NavBar";

import SliderPage from "./components/SliderPage";
import WelCome from "./components/WelCome";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      
    

      <Routes>
       <Route path="/" element={<WelCome/>} />
        <Route path="/sliderpage" element={<SliderPage />} />
        <Route path="/meals" element={<FrontPage />} />

        <Route path="/recipe/:idMeal" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
