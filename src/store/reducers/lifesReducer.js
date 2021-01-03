import { createSlice } from "@reduxjs/toolkit";

const lifesReducer = createSlice({
    name: "lifesReducer",
    initialState: {
        lifes: 3,
    },
    reducers: {
        decreaseBirdLife: (state) => {
            state.lifes -= 1;
        },
        setDefaultBirdLife: (state) => {
            state.lifes = 3;
        },
    },
});
export const { decreaseBirdLife, setDefaultBirdLife } = lifesReducer.actions;
export default lifesReducer.reducer;
