import { createSlice } from "@reduxjs/toolkit";

const gameReducer = createSlice({
    name: "gameReducer",
    initialState: {
        status: "stop",
        userName: null,
        userScore: 0,
        userTopScore: [],
    },
    reducers: {
        changeGameStatus: (state, action) => {
            state.status = action.payload;
        },
        getUserName: (state, action) => {
            state.userName = action.payload;
        },
        getUserScore: (state) => {
            state.userScore += 1;
        },
    },
});
export const {
    changeGameStatus,
    getUserName,
    getUserScore,
} = gameReducer.actions;
export default gameReducer.reducer;
