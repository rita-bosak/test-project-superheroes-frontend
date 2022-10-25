import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const superheroesApi = createApi({
  reducerPath: "superheroesApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://project-superheroes-backend.herokuapp.com/api/superheroes",
  }),
  tagTypes: ["Superheroes"],
  endpoints: (builder) => ({
    getSuperheroes: builder.query({
      query: () => "?page=1&limit=5",
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
  }),
});

export const {
  useGetSuperheroesQuery,
  useGetSuperheroByIdQuery,
  useAddSuperheroMutation,
  useDeleteSuperheroMutation,
} = superheroesApi;
