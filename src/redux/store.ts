import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"


export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
});

export type RootStates = ReturnType<typeof store.getState>;

