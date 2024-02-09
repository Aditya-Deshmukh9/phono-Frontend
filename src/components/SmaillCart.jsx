import React from "react";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SmallCart() {
  const totalQnty = useSelector((state) => state.allCart.cartTotalQuantity);

  return (
    <Link
      to={"/cart"}
      className=" absolute bottom-5 right-10 rounded-2xl px-1 h-16 w-16 bg-[#6366F1] flex  items-center"
    >
      <IoMdCart size={32} color="white" className="cursor-pointer shadow-xl" />

      <h2 className="bg-white text-black rounded-lg ml-1 px-1">{totalQnty}</h2>
    </Link>
  );
}

export default SmallCart;
