import { configureStore } from "@reduxjs/toolkit";
import loginStore from "./Login-Store.js";


const store = configureStore({

    reducer : {
        login : loginStore.reducer
    }

});

export default store;