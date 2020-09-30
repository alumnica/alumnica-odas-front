import { combineReducers } from "redux";

import odasReducer from "./odas";
import momentosReducer from "./momentos";
import contenidoReducer from "./contenido";
import testReducer from "./test";

const rootReducer = combineReducers({
  odas: odasReducer,
  momentos: momentosReducer,
  contenido: contenidoReducer,
  test: testReducer,
});

export default rootReducer;
