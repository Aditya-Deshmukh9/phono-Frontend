import React, { useState } from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import { useGetProductQuery } from "../Redux/createApi";
import Loading from "../components/Loading";

function Mobile() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetProductQuery();
  console.log("data", data);

  const selectedPagehandle = (selectedPage) => {
    setPage(selectedPage);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <div>Error loading data: Please Reload the setPage</div>;
  }

  return (
    <div className="min-h-screen mx-auto w-full px-6 py-8">
      <div className="lg:-mx-2 lg:flex">
        <div className="space-y-3 lg:w-1/5 lg:space-y-4 lg:px-2 shadow-md border-2 py-2">
          <Link
            to="#"
            className="block font-medium text-gray-900 hover:underline"
          >
            Jackets & Coats
          </Link>
          <Link
            to="#"
            className="block font-medium text-gray-900 hover:underline"
          >
            Hoodies
          </Link>
          <Link
            to="#"
            className="block font-medium text-gray-900 hover:underline"
          >
            T-shirts & Vests
          </Link>
          <p>Total Products[{data.response.length}]</p>
        </div>

        <div className="mt-6 lg:mt-0 lg:w-4/5 lg:px-2">
          <div className="flex items-center justify-end text-sm uppercase tracking-widest">
            <div className="flex items-center">
              <p>Sort</p>
              <select className="bg-transparent font-medium text-gray-700 focus:outline-none dark:text-gray-200">
                <option value="#">Recommended</option>
                <option value="#">Size</option>
                <option value="#">Price</option>
              </select>
            </div>
          </div>

          {/* PAGINATION */}
          <div className="min-h-screen flex justify-center mx-2">
            <div className=" mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data.response.slice(page * 8 - 8, page * 8).map((e, index) => (
                <Products items={e} key={index} />
              ))}
            </div>
          </div>

          {data.response.length > 9 && (
            <div className="flex text-black justify-center items-center mt-4">
              <span
                onClick={() => selectedPagehandle(page - 1)}
                className={`${
                  page > 1 ? "" : "hidden"
                } cursor-pointer px-4  py-2 border border-black`}
              >
                Previous
              </span>
              {Array.from(
                { length: Math.ceil(data.response.length / 8) },
                (_, i) => (
                  <span
                    key={i}
                    onClick={() => selectedPagehandle(i + 1)}
                    className={`${
                      page === i + 1 ? "bg-zinc-400" : ""
                    } cursor-pointer px-4 py-2 border border-black`}
                  >
                    {i + 1}
                  </span>
                )
              )}

              <span
                onClick={() => selectedPagehandle(page + 1)}
                className={`${
                  page < data.response.length / 8 ? "" : "hidden"
                } cursor-pointer px-4 py-2 border border-black`}
              >
                Next
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mobile;
