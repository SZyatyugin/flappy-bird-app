import { createSlice } from "@reduxjs/toolkit";

const birdReducer = createSlice({
    name: "birdReducer",
    initialState: {
        birdPosX: 20,
        birdPosY: 100,
    },
    reducers: {},
});
export default birdReducer.reducer;
