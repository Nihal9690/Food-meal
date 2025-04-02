import React from "react";

const WelCome = () => {
  
  return (
    <div

      className="w-full min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663047707111-c022dee3abe7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-lg flex flex-col items-center justify-center text-center text-white h-auto font-semibold text-3xl capitalize gap-6 max-w-3xl mx-4">
        <h1 className="text-6xl font-extrabold">Welcome to my world!</h1>
        <h2 className="text-4xl font-medium ">
          This is a MealDB Project using React & API.
        </h2>
        <p className="text-lg opacity-80 mt-4">
          Discover a variety of delicious recipes and get inspired!
        </p>
      </div>
    </div>
  );
};

export default WelCome;
