import React from "react";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="h-screen w-full">
        <div className="flex h-[80px] w-full items-center justify-between bg-blue-400 sm:px-8 px-2 md:h-[70px]">
          <div className="flex items-center justify-between md:justify-start">
            <img
              className="h-6 cursor-pointer md:h-9"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
            <div className="flex gap-5 italic font-mono uppercase md:ml-8">
              <a
                href="#"
                className="hidden border-black delay-75 duration-100 ease-in hover:border-b-2 md:inline-block"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="hidden border-black delay-75 duration-100 ease-in hover:border-b-2 md:inline-block"
              >
                Team
              </a>
              <a
                href="#"
                className="hidden border-black delay-75 duration-100 ease-in hover:border-b-2 md:inline-block"
              >
                Projects
              </a>
              <a
                href="#"
                className="hidden border-black delay-75 duration-100 ease-in hover:border-b-2 md:inline-block"
              >
                Calendar
              </a>
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
                <svg
                  className="h-4 w-4 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 md:justify-end">
            <div className="flex h-14 w-14 items-center">
              <svg
                className="h-10 w-7 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
              </svg>
              <h2 className="bg-white rounded-lg ml-1 px-1">0</h2>
            </div>

            <img
              className="hidden md:block shadow-xl h-6 cursor-pointer rounded-full md:h-8"
              src="https://th.bing.com/th?q=Avatar+Makeup&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
              alt=""
            />
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
      </div>

      {!toggle ? (
        <div className="h-screen w-full italic absolute top-20 sm:hidden bg-blue-400 flex flex-col items-center gap-10 font-mono uppercase">
          <a
            href="#"
            className="sm:hidden border-black delay-75 duration-100 ease-in-out hover:border-b-2 md:inline-block mt-6"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="sm:hidden border-black delay-75 duration-100 ease-in-out hover:border-b-2 md:inline-block"
          >
            Team
          </a>
          <a
            href="#"
            className="sm:hidden border-black delay-75 duration-100 ease-in-out hover:border-b-2 md:inline-block"
          >
            Projects
          </a>
          <a
            href="#"
            className="sm:hidden border-black delay-75 duration-100 ease-in-out hover:border-b-2 md:inline-block"
          >
            Calendar
          </a>
          <div className="flex items-center gap-2">
            <img
              className="sm:hidden h-8 cursor-pointer rounded-full "
              src="https://th.bing.com/th?q=Avatar+Makeup&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
              alt=""
            />
            <p className="sm:hidden border-black delay-75 duration-100 ease-in-out hover:border-b-2 md:inline-block">
              Profile
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
