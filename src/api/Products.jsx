import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'dummyJson',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({limit}) => `products?limit=${limit}`,
    }),
    getHomeDecor: builder.query({
      query: () => 'products/category/home-decoration?limit=3',
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),

    })
});

export const { useGetProductsQuery, useGetHomeDecorQuery, useGetSingleProductQuery } = productsApi;