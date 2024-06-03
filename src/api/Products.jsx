import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'dummyJson',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({limit}) => `products?limit=${limit}`,
    }),
    getProductCategory: builder.query({
      query: () => 'products/category/home-decoration?limit=3',
    })
  }),
});

export const { useGetProductsQuery, useGetProductCategoryQuery } = productsApi;