import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ReduxToolkit from './ReduxToolkit';
// import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
// import store from './store/counter'
// import store  from './redux-app/store.js';
// import store from "./redux-toolkit/store"
// import { configureStore } from '@reduxjs/toolkit' 
// import userReducer from "./redux_login/feature/user"
import {store } from "./redux_tookit_movie_app/features/store"
// const store =configureStore({
//    reducer:{
//        user:userReducer
//    }
// })






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);
