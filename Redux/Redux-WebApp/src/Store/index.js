import { configureStore } from "@reduxjs/toolkit";
import { layoutActions } from "./Layout-Store.js";
import logInStore from "./Login-Store.js";


const store = configureStore({

    reducer : {
        login : logInStore.reducer,
        layout : layoutActions.reducer
    }

});

export default store;