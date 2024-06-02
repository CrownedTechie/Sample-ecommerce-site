import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'dummyJson',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products?limit=10',
    }),
    getProductCategory: builder.query({
      query: () => 'home-decoration'
    })
  }),
});

export const { useGetProductsQuery, useGetProductCategoryQuery } = productsApi;