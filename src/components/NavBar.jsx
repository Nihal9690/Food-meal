// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import WelCome from "./WelCome";

// const NavBar = () => {
//   const navigate = useNavigate();

//   const [btn, setBtn]=useState('')

//   const Yes = "Log In";
//   const No = "Log Out"

//   const ChangeLog = ()=>{

//   (Yes === true && <WelCome/>)

//   }

//    // back to prePage

//   return (
//     <>
//       <div className="navbar bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <div className="flex gap-3 justify-center flex-col items-center text-2xl">
//                 <li>Welcome</li>
//                 <Link to={"/sliderpage"} className="mr-2">
//                   SliderPage
//                 </Link>
//                 <Link to={"/meals"}>Meals</Link>
//                 <button
//                   className="btn btn-outline"
//                   to={"/home"}
//                   onClick={() => navigate(-1)}
//                 >
//                   Backword
//                 </button>
//               </div>
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl ">Annapurna.com</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 font-semibold">
//             <div className="flex gap-3 text-2xl justify-center items-center">
//             <li>Welcome</li>
//               <Link to={"/sliderpage"} className="mr-2">
//                 SliderPage
//               </Link>
//               <Link to={"/meals"}>Meals</Link>
//               <button
//                 className="btn btn-outline"
//                 to={"/home"}
//                 onClick={() => navigate(-1)}
//               >
//                 Forward
//               </button>
//             </div>
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn"  onClick={()=>navigate(-1)} >Log In </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

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
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <div className="flex gap-3 justify-center flex-col items-center text-2xl">
                <li>Welcome</li>
                <Link to={"/sliderpage"} className="mr-2">
                  SliderPage
                </Link>
                <Link to={"/meals"}>Meals</Link>
                <button
                  className="btn btn-outline"
                  onClick={() => navigate(-1)}
                >
                  Backward
                </button>
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">MealDB</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <div className="flex gap-3 text-2xl justify-center items-center">
              <li>Welcome</li>
              <Link to={"/sliderpage"} className="mr-2">
                SliderPage
              </Link>
              <Link to={"/meals"}>Meals</Link>
              <button className="btn btn-outline" onClick={() => navigate(-1)}>
                Go Back
              </button>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? (
              <button className="btn" onClick={handleLogOut}> LogOut
              {" "}
            </button>
          ) : (
            <button className="btn" onClick={handleLogin}>LogIn
            {" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
