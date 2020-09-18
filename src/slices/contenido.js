import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Initial State
export const initialState = {
  loading: false,
  hasErrors: false,
  contenido: [],
};

//Slice
const contenidoSlice = createSlice({
  name: "contenido",
  initialState,
  reducers: {
    getContenido: (state) => {
      state.loading = true;
    },
    getContenidoSuccess: (state, { payload }) => {
      state.contenido = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getContenidoFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

//Actions
export const { getContenido, getContenidoSuccess, getContenidoFailure } = contenidoSlice.actions;

//Selectors
export const contenidoSelector = (state) => state.contenido;

//Reducer
export default contenidoSlice.reducer;

//Functions
export const fetchContenido = (id) => {
  return async (dispatch) => {
    dispatch(getContenido());
    try {
      const response = await axios.get(
        `https://app.alumnica.org/api/odas/microodas/${id}/moments/`
      );

      dispatch(getContenidoSuccess(response.data));
    } catch (error) {
      console.log(error)
      dispatch(getContenidoFailure());
    }
  };
};
