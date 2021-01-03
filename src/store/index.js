import { configureStore } from "@reduxjs/toolkit";
import {
    birdReducer,
    pipesReducer,
    gameReducer,
    lifeReducer,
} from "./reducers";

const store = configureStore({
    reducer: {
        birdReducer,
        pipesReducer,
        gameReducer,
        lifeReducer,
    },
});
export default store;
