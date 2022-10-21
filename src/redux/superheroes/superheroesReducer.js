import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const superheroesApi = createApi({
  reducerPath: "superheroesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://project-superheroes-backend.herokuapp.com/api",
  }),
  endpoints: (builder) => ({
    getSuperheroes: builder.query({
      query: () => "/superheroes?page=1&limit=5",
    }),
    addSuperhero: builder.mutation({
      query: ({
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
      }) => ({
        url: "/superheroes",
        method: "POST",
        body: {
          nickname,
          real_name,
          origin_description,
          superpowers,
          catch_phrase,
          images,
        },
      }),
    }),
    deleteSuperhero: builder.mutation({
      query: (superheroId) => ({
        url: `/superheroes/${superheroId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetSuperheroesQuery,
  useAddSuperheroMutation,
  useDeleteSuperheroMutation,
} = superheroesApi;
