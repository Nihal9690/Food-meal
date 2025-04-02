import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <nav className="navbar bg-base-100 shadow-md">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="text-center text-lg">Welcome</li>
            <li>
              <Link to="/sliderpage">Slider Page</Link>
            </li>
            <li>
              <Link to="/meals">Meals</Link>
            </li>
            <li>
              <button className="btn btn-outline w-full" onClick={() => navigate(-1)}>
                Backward
              </button>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          Annapurna.com
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <span className="text-lg">Welcome</span>
          </li>
          <li>
            <Link to="/sliderpage" className="btn btn-ghost">
              Slider Page
            </Link>
          </li>
          <li>
            <Link to="/meals" className="btn btn-ghost">
              Meals
            </Link>
          </li>
          <li>
            <button className="btn btn-outline" onClick={() => navigate(-1)}>
              Backward
            </button>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {isLoggedIn ? (
          <button className="btn btn-error" onClick={handleLogOut}>
            Log Out
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleLogin}>
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
