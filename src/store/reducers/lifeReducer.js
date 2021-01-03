import { createSlice } from "@reduxjs/toolkit";

const lifeReducer = createSlice({
    name: "lifeReducer",
    initialState: {
        lifes: 3,
    },
    reducers: {},
});
export default lifeReducer.reducer;
