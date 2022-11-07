import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

export const loadingSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
