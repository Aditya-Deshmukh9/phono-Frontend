import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeToCart,
  clearcart,
} from "../../Redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.allCart.carts);
  const totalQnty = useSelector((state) => state.allCart.cartTotalQuantity);
  const totalAmount = useSelector((state) => state.allCart.cartTotalAmount);
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    dispatch(removeToCart(e));
  };

  const increaseQnty = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const decreaseQnty = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearcart());
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart ({totalQnty})
            </h1>
            <button
              onClick={handleClearCart}
              className="btn btn-xs btn-outline btn-error"
            >
              Clear All
            </button>
          </header>
          <div className="mt-8">
            <ul className="space-y-4">
              {cart.map((e, index) => (
                <li key={index} className="flex items-center gap-4">
                  <img
                    src={e.thumbnail}
                    alt=""
                    className="h-16 w-16 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">{e.title}</h3>
                    <h3 className="text-xs text-gray-700 truncate">
                      {e.description}
                    </h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">Brand: </dt>
                        <dd className="inline">{e.brand}</dd>
                      </div>

                      <div>
                        <dt className="inline">Price: </dt>
                        <dd className="inline">{e.price}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <div>
                      <label htmlFor="Quantity" className="sr-only">
                        Quantity
                      </label>

                      <div className="flex items-center rounded border border-gray-200">
                        <button
                          type="button"
                          onClick={() => decreaseQnty(e._id)}
                          className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
                        >
                          -
                        </button>

                        <p>{e.qnty}</p>

                        <button
                          type="button"
                          onClick={() => increaseQnty(e._id)}
                          className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(e._id)}
                      className="text-gray-600 transition hover:text-red-600"
                    >
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>₹ {totalAmount}</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>₹ {totalAmount}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
