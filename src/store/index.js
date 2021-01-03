import { configureStore } from "@reduxjs/toolkit";
import {
    birdReducer,
    pipesReducer,
    gameReducer,
    lifesReducer,
} from "./reducers";

const store = configureStore({
    reducer: { birdReducer, pipesReducer, gameReducer, lifesReducer },
});
export default store;
