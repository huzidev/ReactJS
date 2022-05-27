import { configureStore } from "@reduxjs/toolkit";
import logInStore from "./Login-Store.js";
import layoutStore from "./Layout-Store.js";
import cartStore from "./Cart-Store.js";
import sliderStore from "./Slider-Store.js";


const store = configureStore({

    reducer : {
        login : logInStore.reducer,
        layout : layoutStore.reducer,
        cart : cartStore.reducer,
        slider : sliderStore.reducer
    }

});

export default store;