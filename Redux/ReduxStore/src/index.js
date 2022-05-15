import React from "react";
import ReactDOM from "react-dom";
import App from "./MyComponents/App";
import "./styles/style.css";
import { Provider } from 'react-redux';
import store from './store';

// what we've did here is that
//
ReactDOM.render(
   <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("head")
)