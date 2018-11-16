import React, { Component } from "react";
import Login from "./Login";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"

import themeReducer from "./store/themeReducer";
const store = createStore(combineReducers({themeReducer}), applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}
