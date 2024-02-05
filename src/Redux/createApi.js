import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApiBaseUrl = import.meta.env.VITE_PRODUCTS_DATA;

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: productApiBaseUrl }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "api/data/products",
    }),
  }),
});

export const { useGetProductQuery } = api;
