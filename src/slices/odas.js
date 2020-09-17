import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  odas: [],
};

const odasSlice = createSlice({
  name: "odas",
  initialState,
  reducers: {
    getOdas: (state) => {
      state.loading = true;
    },
    getOdasSuccess: (state, { payload }) => {
      state.ODAs = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getOdasFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const odasSelector = state => state.odas

export default odasSlice.reducer;
