import { createStore, applyMiddleware, combineReducers } from "redux";
// Logger with default options
import logger from "redux-logger";

import { persistStore, persistReducer, autoRehydrate } from "redux-persist";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { pippoReducer, loginReducer } from "./reducers/reducers";

import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, pippoReducer);

export const store = createStore(pReducer, applyMiddleware(logger), autoRehydrate);
console.log("GET STATE: ", store.getState())

export const persistor = persistStore(store);
