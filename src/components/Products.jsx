import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, getTotal } from "../Redux/cartSlice";
import { Link } from "react-router-dom";

function Products({ items }) {
  const dispatch = useDispatch();

  const sendtocart = (e) => {
    dispatch(addToCart(e));
    dispatch(getTotal(e));
  };

  return (
    <Link
      to={`/mobiles/${items.id}`}
      className="mx-auto flex w-full max-w-lg flex-col items-center justify-center"
    >
      <img
        className="h-72 w-full rounded-md object-cover xl:h-80"
        src={items.images[0]}
        alt="T-Shirt"
      />

      <h4 className="mt-2 text-lg font-medium text-gray-950">{items.title}</h4>

      <p className="text-blue-500">Rs. {items.price}</p>

      <button
        onClick={() => sendtocart(items)}
        className="mt-4 flex w-full transform items-center justify-center rounded-md bg-gray-800 px-2 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-1 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <span className="mx-1">Add to cart</span>
      </button>
    </Link>
  );
}

export default Products;
