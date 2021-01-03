import { createSlice } from "@reduxjs/toolkit";

const gameReducer = createSlice({
    name: "gameReducer",
    initialState: {
        status: "stop",
        userName: null,
        userScore: 0,
        userListTopScore: [],
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
        setUserScoreToDefault: (state) => {
            state.userScore = 0;
        },
        setUserListTopScore: (state) => {
            state.userListTopScore.push({
                userName: state.userName,
                score: state.userScore,
            });
        },
    },
});
export const {
    changeGameStatus,
    getUserName,
    getUserScore,
    setUserListTopScore,
    setUserScoreToDefault,
} = gameReducer.actions;
export default gameReducer.reducer;
