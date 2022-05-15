import React from "react";
import ReactDOM from "react-dom";
import App from "./MyComponents/App";
import "./styles/style.css";
import "./styles/auth.css";
import "./styles/layout.css";
import { Provider } from 'react-redux';
import store from './Store';

// what we've did here is that
// we imported PROVIDER which is basically used to give access of REDUX-STORE to ours app.js where all of ours STATE and FUNCTIONS are present therefore we've wrapped ours <App /> inside PROVIDER and provide a prototype store and store is the place where we've REDUX STORE
ReactDOM.render(
   <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("head")
)