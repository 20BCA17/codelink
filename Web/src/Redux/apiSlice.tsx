// api/apiSlice.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiEndpoint = 'https://649eeb6a245f077f3e9d1c4e.mockapi.io/create';


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiEndpoint }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: () => '/',
    }),
    insertData: builder.mutation({
      query: (data) => ({
        url: '/',
        method: 'POST',   
        body: data,
      }),
    }),
    updateData: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteData: builder.mutation({  
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchDataQuery, useInsertDataMutation, useUpdateDataMutation, useDeleteDataMutation } = apiSlice;