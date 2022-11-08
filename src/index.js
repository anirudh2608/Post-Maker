import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContainer from "./container/AppContainer"
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import { Provider } from 'react-redux';
import rootReducer from "./services/reducer/rootReducer"
import UserChecker from './component/UserChecker';

// const store = createStore(rootReducer)
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <UserChecker />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <React.StrictMode>
{/* </React.StrictMode> */ }
// reportWebVitals();
