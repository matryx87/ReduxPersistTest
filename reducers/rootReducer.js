import { combineReducers } from "redux";

import { pippoReducer, loginReducer } from "./reducers";

const rootReducer = combineReducers({
  pippo: pippoReducer,
  login: loginReducer
});

export default rootReducer;
