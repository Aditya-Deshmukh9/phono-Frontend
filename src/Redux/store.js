import { configureStore } from "@reduxjs/toolkit";
import { api } from "./createApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
    products: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: { warningThreshold: 32 },
    }),
    api.middleware,
  ],
});

setupListeners(store.dispatch);
