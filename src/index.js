import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import tasksReducer from './reducers'; // I named the default export!!
import App from './App';
import "./styles.css";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = (state = {}, action) => {
  return {
    tasks: tasksReducer(state.tasks, action),
  };
}

const myFavoriteStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={myFavoriteStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

