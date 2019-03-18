import { combineReducers } from "redux";

import defaultReducer, { pippoReducer, loginReducer } from "./reducers";

const rootReducer = combineReducers({
  defaultReducer,
  pippoReducer,
  loginReducer
});

export default rootReducer;
