import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL =
  "https://project-superheroes-backend.herokuapp.com/api/superheroes";

// const SERVER_URL = 'http://localhost:5000/api/superheroes';

export const superheroesApi = createApi({
  reducerPath: "superheroesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Superheroes"],
  endpoints: (builder) => ({
    getSuperheroes: builder.query({
      query: ({ page, limit }) => `?page=${page}&limit=${limit}`,
      providesTags: ["Superheroes"],
    }),
    getSuperheroById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Superheroes"],
    }),
    addSuperhero: builder.mutation({
      query: (payload) => ({
        url: "/",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Superheroes"],
    }),
    deleteSuperhero: builder.mutation({
      query: (superheroId) => ({
        url: `/${superheroId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Superheroes"],
    }),
    deleteSuperheroImage: builder.mutation({
      query: ({ superheroId, publicId }) => ({
        url: `/${superheroId}/images/delete/${publicId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Superheroes"],
    }),
    addSuperheroImage: builder.mutation({
      query: ({ superheroId, data }) => ({
        url: `/${superheroId}/images/add`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Superheroes"],
    }),
  }),
});

export const {
  useGetSuperheroesQuery,
  useGetSuperheroByIdQuery,
  useAddSuperheroMutation,
  useDeleteSuperheroMutation,
  useDeleteSuperheroImageMutation,
  useAddSuperheroImageMutation,
} = superheroesApi;
