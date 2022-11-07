import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { SearchMovieDataType } from "@/types/searchResult";

type MoviesState = {
  searchQuery: string | undefined;
  movies: SearchMovieDataType[];
  totalPages: number;
  currentPage: number;
  isEmptyResult: boolean;
};

const initialState: MoviesState = {
  searchQuery: undefined,
  movies: [],
  totalPages: 0,
  currentPage: 0,
  isEmptyResult: false,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMoviesData: (state, action: PayloadAction<SearchMovieDataType[]>) => {
      state.movies = [...action.payload];
    },
    setListTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setEmptyResult: (state, action: PayloadAction<boolean>) => {
      state.isEmptyResult = action.payload;
    },
  },
});

export const {
  setMoviesData,
  setListTotalPages,
  setCurrentPage,
  setSearchQuery,
  setEmptyResult,
} = movieSlice.actions;

export const selectMovies = (state: RootState) => state.movies;

export default movieSlice.reducer;
