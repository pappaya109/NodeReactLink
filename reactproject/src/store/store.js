import { configureStore } from "@reduxjs/toolkit" ;
import shopInfoReducer from './shopSlice';

const store = configureStore({
    reducer : {
        shops : shopInfoReducer
    },
})

export default store;