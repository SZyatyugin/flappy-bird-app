import { createSlice } from "@reduxjs/toolkit";

const birdReducer = createSlice({
    name: "birdReducer",
    initialState: {
        birdPosX: 20,
        birdPosY: 100,
    },
    reducers: {
        fallBird: (state) => {
            state.birdPosY += 4;
        },
        flyBird: (state) => {
            state.birdPosY -= 30;
        },
        setStartPosForBird: (state) => {
            (state.birdPosX = 20), (state.birdPosY = 100);
        },
    },
});
export const { fallBird, flyBird, setStartPosForBird } = birdReducer.actions;
export default birdReducer.reducer;
