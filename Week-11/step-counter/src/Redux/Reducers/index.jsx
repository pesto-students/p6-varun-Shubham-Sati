import counterReducer from "./counterReducer";
import authReducer from "./authReducer";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  counterReducer,
  authReducer,
});

export default rootReducers;
