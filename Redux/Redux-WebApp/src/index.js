import React from "react";
import ReactDOM from "react-dom";
import App from "./MyComponents/App";
import "./styles/style.css";
import "./styles/Login.css"
import "./styles/Nav.css"
import "./styles/Slider.css"
import "./styles/Slider.css";
import "./styles/Items.css";
import "./styles/SliderCart.css";
import "./styles/Modal.css";
import "./styles/Footer.css";
import { Provider } from 'react-redux';
import store from './Store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("head")
)