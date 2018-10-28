import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import awesomeTasksReducer from './reducers'; // I named the default export!!
import App from './App';
import "./styles.css";

const myFavoriteStore = createStore(awesomeTasksReducer);

ReactDOM.render(
  <Provider store={myFavoriteStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

