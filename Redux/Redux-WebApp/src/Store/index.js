import { configureStore } from "@reduxjs/toolkit";
import logInStore from "./Login-Store.js";


const store = configureStore({

    reducer : {
        login : logInStore.reducer
    }

});

export default store;