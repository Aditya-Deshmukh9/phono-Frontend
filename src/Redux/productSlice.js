import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  filters: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProducts: (state, action) => {
      const { filterType, filterValue } = action.payload;

      // Update filters object
      state.filters[filterType] = filterValue;

      // Apply filters to products
      state.filteredProducts = state.products.filter((product) => {
        // Customize this based on your filter criteria
        if (
          state.filters.category &&
          product.category !== state.filters.category
        ) {
          return false;
        }
        return true;
      });
    },
  },
});

export const { setProducts, filterProducts } = productSlice.actions;
export default productSlice.reducer;
