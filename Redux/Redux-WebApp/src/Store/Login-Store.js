import { createSlice } from "@reduxjs/toolkit";

const loginStore = createSlice({

    name : 'login',
    initialState : {isLoggedIn : false}

});

export default loginStore;