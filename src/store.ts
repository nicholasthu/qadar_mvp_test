import { configureStore } from "@reduxjs/toolkit";

import movieSlice from "./features/movieSlice";
import configSlice from "./features/configSlice";
import loadingSlice from "./features/loadingSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    config: configSlice,
    loading: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
