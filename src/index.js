import React from 'react';
import ReactDOM from 'react-dom';

//router
import { BrowserRouter as Router } from "react-router-dom";

//store
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer } from "./store"

//style
import App from './App';

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <Provider store={store}>
  <Router>
  <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);
