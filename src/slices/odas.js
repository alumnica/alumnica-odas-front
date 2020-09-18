import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Initial State
export const initialState = {
  loading: false,
  hasErrors: false,
  odas: [],
};

//Slice
const odasSlice = createSlice({
  name: "odas",
  initialState,
  reducers: {
    getOdas: (state) => {
      state.loading = true;
    },
    getOdasSuccess: (state, { payload }) => {
      state.odas = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getOdasFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

//Actions
export const { getOdas, getOdasSuccess, getOdasFailure } = odasSlice.actions;

//Selectors
export const odasSelector = (state) => state.odas;
export const odaIdSelector = (state, id) => {
  return state.odas.odas.filter(oda => oda.id === Number(id) )[0]
}


//Reducer
export default odasSlice.reducer;

//Functions
export const fetchOdas = () => {
  return async (dispatch) => {
    dispatch(getOdas());
    try {
      const response = await axios.get("https://app.alumnica.org/api/odas/");

      dispatch(getOdasSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getOdasFailure());
    }
  };
};
