import { configureStore } from "@reduxjs/toolkit";
import logInStore from "./Login-Store.js";
import layoutStore from "./Layout-Store.js";


const store = configureStore({

    reducer : {
        login : logInStore.reducer,
        layout : layoutStore.reducer
    }

});

export default store;