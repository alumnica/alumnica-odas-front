import { combineReducers } from "redux";

import odasReducer from "./odas";

const rootReducer = combineReducers({
  odas: odasReducer,
});

export default rootReducer;
