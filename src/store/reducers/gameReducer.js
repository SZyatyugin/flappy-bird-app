import { createSlice } from "@reduxjs/toolkit";

const gameReducer = createSlice({
    name: "gameReducer",
    initialState: {
        status: "stop",
    },
    reducers: {},
});
export default gameReducer.reducer;
