import { configureStore } from "@reduxjs/toolkit";
import todosSliceReducer from "./todos/todosSlice";

export const store = configureStore({
    reducer:{
        todos:todosSliceReducer
    }
})