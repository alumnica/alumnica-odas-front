import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Initial State
export const initialState = {
  loading: false,
  hasErrors: false,
  momentos: [],
};

//Slice
const momentosSlice = createSlice({
  name: "momentos",
  initialState,
  reducers: {
    getMomentos: (state) => {
      state.loading = true;
    },
    getMomentosSuccess: (state, { payload }) => {
      state.momentos = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getMomentosFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

//Actions
export const { getMomentos, getMomentosSuccess, getMomentosFailure } = momentosSlice.actions;

//Selectors
export const momentosSelector = (state) => state.momentos;

//Reducer
export default momentosSlice.reducer;

//Functions
export const fetchMomentos = (id) => {
  return async (dispatch) => {
    dispatch(getMomentos());
    try {
      const response = await axios.get(
        `https://app.alumnica.org/api/odas/${id}/microodas/`
      );

      dispatch(getMomentosSuccess(response.data));
    } catch (error) {
      console.log(error)
      dispatch(getMomentosFailure());
    }
  };
};
