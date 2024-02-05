import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  carts: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        // If the item is already in the cart, create a new state with the updated quantity
        state.carts = state.carts.map((item, index) =>
          index === itemIndex ? { ...item, qnty: item.qnty + 1 } : item
        );
      } else {
        // If the item is not in the cart, add it to the cart
        state.carts = [...state.carts, { ...action.payload, qnty: 1 }];
      }
      // Update totals
      toast.success("Add to cart");
      state.cartTotalQuantity += 1;
      state.cartTotalAmount += action.payload.price;
    },

    removeToCart: (state, action) => {
      const removedItemIndex = state.carts.findIndex(
        (item) => item._id === action.payload
      );

      if (removedItemIndex !== -1) {
        const removedItem = state.carts[removedItemIndex];

        // Update totals
        toast.success("Remove from cart");
        state.cartTotalQuantity -= removedItem.qnty;
        state.cartTotalAmount -= removedItem.qnty * removedItem.price;

        // Remove item from the cart using slice to create a new array
        state.carts = [
          ...state.carts.slice(0, removedItemIndex),
          ...state.carts.slice(removedItemIndex + 1),
        ];
      }
    },

    increaseQuantity: (state, action) => {
      const incItem = state.carts.find((item) => item._id === action.payload);
      // console.log(incItem);
      if (incItem) {
        // Increase quantity and update totals
        incItem.qnty += 1;
        state.cartTotalQuantity += 1;
        state.cartTotalAmount += incItem.price;
        toast("Increase quantity", {
          icon: "⬆️",
        });
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.carts.find((item) => item._id === action.payload);
      if (item && item.qnty > 1) {
        // Decrease quantity and update totals
        item.qnty -= 1;
        state.cartTotalQuantity -= 1;
        state.cartTotalAmount -= item.price;
        toast("Decrease Quantity", {
          icon: "⬇️",
        });
      }
    },

    getTotal: (state) => {
      state.cartTotalQuantity = state.carts.reduce(
        (total, item) => total + item.qnty,
        0
      );
      state.cartTotalAmount = state.carts.reduce(
        (total, item) => total + item.qnty * item.price,
        0
      );
    },
    clearcart: (state) => {
      state.carts = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      toast.success("Cart Cleared");
    },
  },
});

export const {
  addToCart,
  removeToCart,
  increaseQuantity,
  decreaseQuantity,
  getTotal,
  clearcart,
} = cartSlice.actions;
export default cartSlice.reducer;
