import { createSlice } from "@reduxjs/toolkit";

const birdReducer = createSlice({
    name: "birdReducer",
    initialState: {
        birdPosX: 50,
        birdPosY: 200,
    },
    reducers: {
        fallBird: (state) => {
            return { ...state, birdPosY: state.birdPosY + 4 };
        },
        flyBird: (state) => {
            return { ...state, birdPosY: state.birdPosY - 30 };
        },
    },
});

export const { fallBird, flyBird } = birdReducer.actions;

export default birdReducer.reducer;
