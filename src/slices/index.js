import { combineReducers } from "redux";

import odasReducer from "./odas";
import momentosReducer from "./momentos";
import contenidoReducer from "./contenido";

const rootReducer = combineReducers({
  odas: odasReducer,
  momentos: momentosReducer,
  contenido: contenidoReducer,
});

export default rootReducer;
