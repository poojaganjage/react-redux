import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore, applyMiddleware, compose, combineReducers} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
//import reducerdata from './reducers/reducerdata';
import nameReducer from './reducers/nameReducer';
import wishReducer from './reducers/wishReducer';
import inputReducer from './reducers/inputReducer';
import fetchdataReducer from './reducers/fetchdataReducer';
import submitdataReducer from './reducers/submitdataReducer';

//const store = configureStore({reducer: reducerdata}, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = configureStore({reducer: reducerdata}, composeEnhancers(applyMiddleware(thunk)));

const masterReducer = combineReducers({
  name: nameReducer,
  wish: wishReducer,
  text: inputReducer,
  fetchdata: fetchdataReducer,
  submitdata: submitdataReducer
});
const store = configureStore({reducer: masterReducer}, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);
