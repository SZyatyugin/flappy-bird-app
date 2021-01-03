import { createSlice } from "@reduxjs/toolkit";

const lifeReducer = createSlice({
    name: "lifeReducer",
    initialState: {
        lifes: 3,
    },
    reducers: {
        minusLife: (state) => {
            return { ...state, lifes: state.lifes - 1 };
        },
        getLifes: (state) => {
            state.lifes;
        },
    },
});
export const { minusLife, getLifes } = lifeReducer.actions;
export default lifeReducer.reducer;
