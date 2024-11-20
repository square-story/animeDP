import { configureStore } from "@reduxjs/toolkit";
import apiSlice from './reducers/apiSlice'

const store = configureStore({
    reducer:{
        api:apiSlice
    }
})

export default store;