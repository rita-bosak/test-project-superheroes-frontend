import { configureStore } from "@reduxjs/toolkit";

import { superheroesApi } from "./superheroes/superheroesReducer";

export const store = configureStore({
  reducer: {
    [superheroesApi.reducerPath]: superheroesApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    superheroesApi.middleware,
  ],

  devTools: process.env.NODE_ENV === "development",
});
