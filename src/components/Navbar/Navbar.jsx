import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/logo.webp";
import { IoMdCart } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

import "../../index.css";

function App() {
  const [toggle, setToggle] = useState(true);
  const totalQnty = useSelector((state) => state.allCart.cartTotalQuantity);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <div className="flex z-[999] h-[80px] w-full text-white items-center justify-between bg-indigo-500 sm:px-8 px-2 md:h-[70px]">
          <div className="flex items-center justify-between md:justify-start">
            <img className="h-6 cursor-pointer md:h-9" src={logo} alt="logo" />
            <div className="flex gap-5 italic font-mono uppercase md:ml-8">
              <NavLink
                to="/"
                className="hidden border-white delay-75 duration-100 ease-in hover:border-b-2 md:inline-block"
              >
                Home
              </NavLink>
              <NavLink
                to="/mobiles"
                className="hidden border-white delay-75 duration-100 ease-in hover:border-b-2 md:inline-block"
              >
                Mobile
              </NavLink>
            </div>
          </div>

          <div className="hidden items-center md:flex md:justify-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="lg:w-[600px] sm:w-40 rounded-lg py-1 pl-8 pr-2 bg-gray-100"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <LuSearch className="h-4 w-4 cursor-pointer text-black" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 md:justify-end">
            <Link to={"/cart"} className="flex h-14 w-14 items-center">
              <IoMdCart
                size={32}
                color="white"
                className="cursor-pointer shadow-xl"
              />

              <h2 className="bg-white text-black rounded-lg ml-1 px-1">
                {totalQnty}
              </h2>
            </Link>

            <div className="hidden h-14 w-14 items-center mr-5 sm:flex md:flex">
              <ul>
                <li>
                  <Link
                    className="bg-orange-400 mb-4 border rounded-2xl px-2 font-mono"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="border rounded-2xl px-2 font-mono"
                    to={"/login"}
                  >
                    Log in
                  </Link>
                </li>
              </ul>
            </div>

            {/* Responsive Section */}
            <svg
              className="h-5 w-5 sm:hidden"
              onClick={handleToggle}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>
        </div>
      </nav>

      {!toggle ? (
        <div className="h-screen w-full italic absolute top-20 sm:hidden bg-blue-400 flex flex-col items-center gap-10 font-mono uppercase">
          <Link
            to="/"
            className="sm:hidden border-white delay-75 duration-100 ease-in-out hover:border-b-2 md:inline-block mt-6"
          >
            Home
          </Link>
          <Link
            to="/mobiles"
            className="sm:hidden border-white delay-75 duration-100 ease-in-out hover:border-b-2 md:inline-block"
          >
            Mobiles
          </Link>

          <Link
            className="bg-orange-400 border rounded-2xl px-2 font-mono"
            to={"/register"}
          >
            Register
          </Link>
          <Link className="border rounded-2xl px-2 font-mono" to={"/login"}>
            Log in
          </Link>

          <div className="flex items-center gap-2">
            <img
              className="sm:hidden h-8 cursor-pointer rounded-full "
              src="https://th.bing.com/th?q=Avatar+Makeup&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
              alt=""
            />
            <p className="sm:hidden border-white delay-75 duration-100 ease-in-out hover:border-b-2 md:inline-block">
              Profile
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
