import { createSlice } from "@reduxjs/toolkit";

const pipesReducer = createSlice({
    name: "pipesReducer",
    initialState: {
        arrayOfPipes: [],
        gameFieldHeight: 394,
        gameFieldWidth: 288,
        pipeWidth: 50,
        pipeGap: 80,
    },
    reducers: {
        addNewPipe: (state) => {
            let height = Math.floor(Math.random() * 314) + 1;
            let { gameFieldWidth, gameFieldHeight } = state;
            state.arrayOfPipes.push({
                pipeHeightTop: height,
                pipeHeightBottom: gameFieldHeight - height,
                pipeWidth: state.pipeWidth,
                pipePosX: gameFieldWidth,
            });
        },
        movePipes: (state) => {
            state.arrayOfPipes.map((elem) => {
                return (elem.pipePosX -= 1);
            });
        },
        deleteItemFromArrayOfPipes: (state) => {
            state.arrayOfPipes.shift();
        },
    },
});
export const {
    addNewPipe,
    movePipes,
    deleteItemFromArrayOfPipes,
} = pipesReducer.actions;
export default pipesReducer.reducer;
