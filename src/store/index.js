import { configureStore } from "@reduxjs/toolkit";
import { birdReducer, pipesReducer, gameReducer } from "./reducers";

const store = configureStore({
    reducer: { birdReducer, pipesReducer, gameReducer },
});
export default store;
