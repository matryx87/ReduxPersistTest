import React, { Component } from "react";
import { Provider } from "react-redux";

import { store, persistor } from "./Store.js";

import AppContainer from "./Navigation.js";

import { PersistGate } from "redux-persist/lib/integration/react";

import SecondView from "./Screen/SecondView.js";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<SecondView />} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
