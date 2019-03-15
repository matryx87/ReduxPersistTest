import { createStore, applyMiddleware, combineReducers } from "redux";
// Logger with default options
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import pippoReducer from './reducers/reducer.js';

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const combinedReducer = combineReducers({
  pippo: pippoReducer
});

const pReducer = persistReducer(persistConfig, pippoReducer);

export const store = createStore(
  pReducer,
  applyMiddleware(logger)
);

export const persistor = persistStore(store);
