import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ConfigType } from "@/types/configuration";

const initialState: ConfigType = {} as ConfigType;

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    getConfig: (state, action: PayloadAction<ConfigType>) => {
      return action.payload;
    },
  },
});

export const { getConfig } = configSlice.actions;

export default configSlice.reducer;
